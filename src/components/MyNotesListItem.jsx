import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function MyNotesListItem({ text, userId }) {
  const [user, setuser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setuser(
        (
          await db.collection("users").where("uid", "==", userId).get()
        ).docs[0].data()
      );
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-800 border border-gray-600 py-2 mb-2 sm:my-2 px-3 py-3 font-medium rounded-md">
      <div className=" bg-green-800 text-xl w-full p-3 rounded-md mb-2 text-center hover:bg-green-700">
        <h1>{text.title}</h1>
      </div>
      <div className=" bg-gray-600 w-full p-3 rounded-md hover:bg-gray-700">
        <h1>{text.content}</h1>
      </div>
      <div className="bg-blue-300 mt-2">
        <h5 className="px-2 py-1 text-black">{user.name}</h5>
      </div>
    </div>
  );
}

export default MyNotesListItem;
