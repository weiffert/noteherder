import React from "react";

import { StyleSheet, css } from "aphrodite";

import quill from "./quill.svg";
import newIcon from "./new.png";
import newHover from "./new-hover.png";

const Sidebar = props => {
  return (
    <div className={css(styles.sidebar)}>
      <div className={css(styles.logo)}>
        <img src={quill} alt="Noteherder" className={css(styles.logoImg)} />
      </div>

      <a onClick={props.makeNewNote}>
        <img
          src={newHover}
          alt="New note"
          className={css(styles.aImage)}
        />
        <img src={newIcon} alt="New note" className={css(styles.aImage)} />
      </a>

      <div className={css(styles.SignOut)}>
        <button className={css(styles.button, styles.SignOutButton)}>
          <i className={`fas fa-sign-out-alt ${css(styles.i)}`} title="Sign out" />
        </button>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
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
    left: "1rem",
    width: "4rem",
    transition: "opacity 0.25s ease-in-out",
    ":hover": {
      opacity: 0
    }
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
});

export default Sidebar;
