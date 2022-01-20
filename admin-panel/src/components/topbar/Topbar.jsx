import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useState } from "react";

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ksadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="menuContainer">
              <p>{user?.username}</p>
              <p>{user?.email}</p>
              <button onClick={handleClick}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
