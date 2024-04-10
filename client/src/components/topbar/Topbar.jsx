import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";


export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [profilePic, setProfilePic] = useState(user ? PF + user.profilePic : "");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="https://travelblogging-hotel-booking.netlify.app/">
              HOTELS
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/ideas">
              IDEAS
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img className="topimg" src={profilePic} alt="profile" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
