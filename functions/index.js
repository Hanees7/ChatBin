const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// Cloud Function to delete documents older than 3 days
exports.deleteExpiredDocuments = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  const now = admin.firestore.Timestamp.now(); // Get current time
  const cutoffTime = new admin.firestore.Timestamp(now.seconds - (3 * 24 * 60 * 60), now.nanoseconds); // 3 days ago

  try {
    const snapshot = await db.collection('texts')
      .where('createdAt', '<', cutoffTime) // Find documents older than 3 days
      .get();

    if (!snapshot.empty) {
      const batch = db.batch();

      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref); // Delete each expired document
      });

      await batch.commit(); // Commit the batch operation
      console.log(`Deleted ${snapshot.size} expired documents.`);
    } else {
      console.log('No expired documents found.');
    }
  } catch (error) {
    console.error('Error deleting expired documents: ', error);
  }
});
