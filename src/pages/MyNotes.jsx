import { getAuth } from "@firebase/auth";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import BackToMainMenu from "../components/BackToMainMenu";
import CreateNote from "../components/CreateNote";
import LogOut from "../components/LogOut";
import MyNotesList from "../components/MyNotesList";
import NotesList from "../components/NotesList";

function MyNotes() {
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
    <div
      style={{ background: "#161616" }}
      className=" text-white sm:h-screen"
    >
      <div className="w-full sm:w-1/2 mx-auto flex justify-between">
        <div className="w-1/3 hidden sm:inline-block">
          <div>
            <CreateNote />
          </div>
          <div>
            <BackToMainMenu />
          </div>
          <div>
            <LogOut />
          </div>
        </div>
        <MyNotesList />
      </div>
    </div>
  );
}

export default MyNotes;
