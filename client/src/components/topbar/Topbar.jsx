import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const profilePic = user ? PF + user.profilePic : null;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="topLeft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistItem btn btn-ghost text-xl">
            <Link className="" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistItem btn btn-ghost text-xl">
            <a className="" href="https://travelblogging-hotel-booking.netlify.app/" target="_blank" rel="noopener noreferrer">
              HOTELS
            </a>
          </li>
          <li className="toplistItem btn btn-ghost text-xl">
            <Link className="" to="/ideas">
              IDEAS
            </Link>
          </li>
          <li className="toplistItem btn btn-ghost text-xl">
            <Link className="" to="/Write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem btn btn-ghost text-xl">
              <button className="" onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight ">
        {user ? (
          <Link className="link" to="/Settings">
            <img className="topimg" src={profilePic} alt="profile" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
              <Link className=" btn btn-ghost text-xl" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link className=" btn btn-ghost text-xl" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
