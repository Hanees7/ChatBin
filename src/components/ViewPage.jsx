import React, { useState } from "react";
import "../components/ViewPage.css";
import { LuSaveAll } from "react-icons/lu";
import { useNavigate } from "react-router-dom";  
// import { firestore, collection, addDoc } from "../components/Firebase";  
import {
  firestore,
  collection,
  addDoc,
  Timestamp
} from "../components/Firebase"; 
const ViewPage = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  // const handleClick = async () => {
  //   if (!text.trim()) {
  //     alert("Please enter some text before saving.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     // Save the text to Firebase Firestore
  //     const docRef = await addDoc(collection(firestore, "texts"), {
  //       content: text,
  //       timestamp: new Date(),
  //     });

  //     // Get the document ID (which will be used as part of the URL)
  //     const docId = docRef.id;

  //     // Redirect to a new URL using the document ID
  //     navigate(`/view/${docId}`);  // Updated to use navigate
  //   } catch (error) {
  //     alert("Error saving text: " + error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleClick = async () => {
  if (!text.trim()) {
    alert("Please enter some text before saving.");
    return;
  }

  try {
    setLoading(true);
    // Save the text to Firebase Firestore with a creation timestamp
    const docRef = await addDoc(collection(firestore, "texts"), {
      content: text,
      timestamp: new Date(),
      createdAt: Timestamp.now() // Add timestamp for when the document was created
    });

    // Get the document ID (which will be used as part of the URL)
    const docId = docRef.id;

    // Redirect to a new URL using the document ID
    navigate(`/view/${docId}`); // Updated to use navigate
  } catch (error) {
    alert("Error saving text: " + error.message);
  } finally {
    setLoading(false);
  }
};
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="main">
      <nav className="navbg">
        <div className="nav">
          <div>
            <span style={{ color: "whitesmoke" }}>{`<Chat`}</span>
            <span style={{ color: "salmon" }}>{`Bin/>`}</span>
          </div>
          <div style={{ display: "flex" }}>
            <button onClick={handleClick} className="button-19" disabled={loading}>
              <LuSaveAll />
              {loading ? "Saving..." : "Save"}
            </button>
            <span style={{ color: "salmon" }}>Happy to See U</span>
          </div>
        </div>
      </nav>
      <div className="hero_section">
        <textarea
          style={{
            userSelect: "none",
            color: "lightcyan",
            padding: "25px 10px",
            fontSize: "medium",
            fontWeight: "600",
          }}
          className="hero_section"
          value={text}
          onChange={handleChange}
          placeholder="> Paste, save, share! (Pasting just a URL will shorten it!)"
        />
      </div>
      <div className="footer">
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
          <span style={{ color: "whitesmoke" }}>©2024 copyright Reserved</span>
          <span style={{ color: "lightcyan" }}>Made  With ❤️ By Hanees</span>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
