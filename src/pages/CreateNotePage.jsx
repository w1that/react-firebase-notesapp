import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publishNote } from "../firebase";

function CreateNotePage() {
  let history = useHistory();
  const auth = getAuth();
  const user = auth.currentUser;
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const publishHandler = async () => {
    if (title.length < 3 || content.length < 10) {
      toast.warn("fill the fields");
      return;
    } else {
      await publishNote({ title: title, content: content }, user.uid, {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      });
      toast.success("successfully created");
      history.push("/notes");
    }
  };

  useEffect(() => {
    if (!user) {
      toast.info("Log in first", {
        position: "bottom-center",
      });
      history.push("/");
    }
  }, []);

  return (
    <div style={{ background: "#161616" }} className="w-full h-screen ">
      <div className="sm:w-2/3 mx-auto">
        <div className="flex pt-40 pb-3  ">
          <input
            onChange={(e) => settitle(e.target.value)}
            placeholder="title"
            className="text-xl sm:w-1/2 w-5/6  px-6  mx-auto bg-purple-200 rounded-md h-10  outline-none"
          ></input>
        </div>
        <div className="flex ">
          {" "}
          <textarea
            onChange={(e) => setcontent(e.target.value)}
            placeholder="note here"
            className="resize-none  mx-auto sm:w-1/2 w-5/6  outline-none bg-purple-200 rounded-md h-48 p-4 px-6 text-xl"
          />
        </div>
        <div className="  pt-5">
          <div className="p-1 w-96 mx-auto flex justify-around">
            <Link to="/notes">
              <button className="transition duration-400 bg-purple-300 font-bold px-10 py-2 ring-2 ring-purple-500 hover:bg-purple-500 rounded-md">
                Cancel
              </button>
            </Link>
            <button
              onClick={publishHandler}
              className="transition duration-400  bg-purple-300 font-bold px-10 py-2 ring-2 ring-purple-500 hover:bg-purple-500 rounded-md"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNotePage;
