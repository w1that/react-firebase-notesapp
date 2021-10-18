import { getAuth } from "@firebase/auth";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CreateNote from "../components/CreateNote";
import LogOut from "../components/LogOut";
import MyNotesButton from "../components/MyNotesButton";
import NotesList from "../components/NotesList";

function Notes() {
  const auth = getAuth();
  const user = auth.currentUser;
  let history = useHistory();
  useEffect(() => {
    if (!user) {
      toast.info("Log in first", {
        position: "bottom-center",
      });
      history.push("/");
    }
  }, []);

  if (!user) {
    return "";
  }

  return (
    <div style={{ background: "#161616" }} className=" text-white ">
      <div className="w-full sm:w-1/2 mx-auto flex justify-between">
        <div className="w-1/3 hidden sm:inline-block">
          <div>
            <CreateNote />
          </div>
          <div>
            <MyNotesButton />
          </div>
          <div>
            <LogOut />
          </div>
        </div>
        <NotesList />
      </div>
    </div>
  );
}

export default Notes;
