import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import NotesListItem from "./NotesListItem";

function NotesList() {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "notes")).then((response) => {
      setnotes(response.docs);
      setloading(false);
    });
  }, []);

  if (loading) {
    return "";
  }

  return (
    <div className="w-full sm:w-2/3 ">
      {!loading &&
        notes.map((doc) => (
          <NotesListItem text={doc.data().text} userId={doc.data().userId} />
        ))}
    </div>
  );
}

export default NotesList;
