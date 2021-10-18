import { getAuth } from "@firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import MyNotesListItem from "./MyNotesListItem";

function MyNotesList() {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(async () => {
    await getDocs(
      query(collection(db, "notes"), where("userId", "==", user.uid))
    ).then((response) => {
      setnotes(response.docs.reverse());
      setloading(false);
    });
  }, []);

  return (
    <div className="w-2/3 ">
      {notes.length === 0 && !loading ? (
        <div className="w-1/2 py-6 px-5 bg-gray-700 mx-auto mt-48 rounded">
          <h1 className="text-white">There isn't any notes here.</h1>
        </div>
      ) : (
        notes.map((doc) => (
          <MyNotesListItem text={doc.data().text} userId={doc.data().userId} />
        ))
      )}
    </div>
  );
}

export default MyNotesList;
