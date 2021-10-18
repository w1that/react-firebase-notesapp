import React from "react";
import CreateNote from "./CreateNote";
import LogOut from "./LogOut";
import write from "../write.png";
import documents from "../documents.png";
import logoutic from "../logout.png";
import { useHistory, useLocation } from "react-router";
import previous from "../previous.png";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import { toast } from "react-toastify";

function BottomMenuMobile() {
  const location = useLocation();
  const history = useHistory();
  const logouthandler = () => {
    logout();
    toast.success("successfully logged out");
    history.push("/");
  };
  return (
    <div className="flex fixed z-10 bg-black bottom-0 w-full justify-between px-4 py-4">
      {(location.pathname == "/mynotes" || location.pathname == "/createnew") && (
        <Link to="/notes">
          <span>
            <img className=" bg-yellow-300 p-1 rounded-full" width="40px" src={previous} />
          </span>
        </Link>
      )}
      {location.pathname!="/createnew" &&<Link to="createnew">
        <span>
          <img className=" bg-purple-300 p-1 rounded-full" width="40px" src={write} />
        </span>
      </Link>}
      {location.pathname == "/notes" && (
        <Link to="/mynotes">
          <span>
            <img className=" bg-green-300 p-1 rounded-full" width="40px" src={documents} />
          </span>
        </Link>
      )}
      <span>
        <img className=" bg-red-300 p-1 rounded-full" onClick={logouthandler} width="40px" src={logoutic} />
      </span>
    </div>
  );
}

export default BottomMenuMobile;
