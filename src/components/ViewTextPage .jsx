import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // useParams for URL param and useNavigate for navigation
import { firestore, doc, getDoc } from "../components/Firebase";  // Correct imports for Firebase
import "../components/ViewPage.css";

const ViewTextPage = () => {
  const { id } = useParams(); // Get the document ID from the URL
  const [text, setText] = useState(""); // Store the fetched text
  const [loading, setLoading] = useState(true); // Loading state to manage UI feedback
  const navigate = useNavigate(); // For navigation after saving

  useEffect(() => {
    const fetchText = async () => {
      try {
        const docRef = doc(firestore, "texts", id); // Reference to the document using the ID from the URL
        const docSnap = await getDoc(docRef); // Fetch the document from Firestore

        if (docSnap.exists()) {
          setText(docSnap.data().content); // If found, update state with the text content
        } else {
          alert("Text not found!"); // If the document doesn't exist
        }
      } catch (error) {
        alert("Error fetching text: " + error.message); // Error handling
      } finally {
        setLoading(false); // Stop loading when finished
      }
    };

    fetchText(); // Call the function to fetch the text from Firestore
  }, [id]); // Dependency array ensures effect runs when the ID changes

  return (
    <div className="viewTextPage">
      <nav className="navbg" style={{position:"fixed", top:"0", width:"100%"}}>
        <div className="nav" >
          <div>
            <span style={{ color: "whitesmoke" }}>{`<Chat`}</span>
            <span style={{ color: "salmon" }}>{`Bin/>`}</span>
          </div>
          <div style={{ display: "flex" }}>
            <button onClick={() => navigate("/")} className="button-19">
              Go Back
            </button>
            <span style={{ color: "salmon" }}>Happy to See U</span>
          </div>
        </div>
      </nav>

      <div className="hero_section2">
        {loading ? (
          <p>Loading...</p> // Show loading message while fetching the text
        ) : (
          <pre style={{overflowX:"hidden", color: "lightcyan", padding: "20px" }}>{text}</pre> // Display the fetched text
        )}
      </div>

      <div className="footer" style={{position:"fixed", bottom:"0", width:"100%"}}>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
          <span style={{ color: "whitesmoke" }}>©2024 copyright Reserved</span>
          <span style={{ color: "lightcyan" }}>Made  With ❤️ By Hanees</span>
        </div>
      </div>
    </div>
  );
};

export default ViewTextPage;
