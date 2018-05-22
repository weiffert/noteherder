import React from "react";

import quill from "./quill.svg";
import newIcon from "./new.png";
import newHover from "./new-hover.png";

const Sidebar = () => {
  return (
    <div className="Sidebar" style={styles.sidebar}>
      <div className="logo" style={styles.logo}>
        <img src={quill} alt="Noteherder" style={styles.logoImg} />
      </div>

      <a href="/notes">
        <img src={newHover} alt="New note" style={styles.aImage} />
        <img src={newIcon} alt="New note" style={styles.aImage} />
      </a>

      <div className="SignOut" style={styles.SignOut}>
        <button style={styles.SignOutButton}>
          <i className="fa fa-sign-out" style={styles.i} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "6rem",
    backgroundColor: "#f3f3f3",
    padding: "0.5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    fontFamily: "Fauna One",
    color: "#666",
    fontSize: "3rem"
  },
  logoImg: {
    width: "3rem",
    paddingLeft: "0.5rem"
  },
  newNote: {
    marginTop: "2rem",
    position: "relative",
    width: "4rem"
  },
  button: {
    backgroundColor: "transparent",
    border: "0",
    color: "#008bf8",
    cursor: "pointer"
  },
  aImage: {
    position: "absolute",
    left: "0",
    width: "100%",
    transition: "opacity 0.25s ease-in-out"
  },
  aHoverImage: {
    opacity: "0"
  },
  SignOut: {
    position: "absolute",
    bottom: "1rem"
  },
  SignOutButton: {
    outline: "none"
  },
  i: {
    fontSize: "2rem"
  }
};

export default Sidebar;
