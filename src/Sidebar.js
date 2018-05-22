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
        <img src={newHover} alt="New note" />
        <img src={newIcon} alt="New note" />
      </a>

      <div className="SignOut">
        <button>
          <i className="fa fa-sign-out" />
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
  alignItems: "center",
},
logo: {
  fontFamily: "Fauna One",
  color: "#666",
  fontSize: "3rem",
},
logoImg: {
  width: "3rem",
  paddingLeft: "0.5rem",
},

// .Sidebar a.new-note {
//   margin-top: 2rem;
//   position: relative;
//   width: 40px;
// }
// .Sidebar button {
//   background-color: transparent;
//   border: 0;
//   color: #008BF8;
//   cursor: pointer;
// }
// .Sidebar a img {
//   position: absolute;
//   left: 0;
//   width: 100%;
//   transition: opacity 0.25s ease-in-out;
// }
// .Sidebar a:hover img.outline {
//   opacity: 0;
// }

// .Sidebar .SignOut {
//   position: absolute;
//   bottom: 1rem;
// }
// .Sidebar .SignOut button {
//   outline: none;
// }
// .Sidebar .SignOut button i.fa {
//   font-size: 2rem;
// }
}

export default Sidebar;