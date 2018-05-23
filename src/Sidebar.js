import React from "react";

import quill from "./quill.svg";
import newIcon from "./new.png";
import newHover from "./new-hover.png";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true
    };
    this.styles = {
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
        transition: "opacity 0.25s ease-in-out"
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
  }

  toggleButton(value) {
    this.setState({
      hover: value
    });
  }

  render() {
    return (
      <div className="Sidebar" style={this.styles.sidebar}>
        <div className="logo" style={this.styles.logo}>
          <img src={quill} alt="Noteherder" style={this.styles.logoImg} />
        </div>

        <a
          onMouseLeave={() => this.toggleButton(true)}
          onMouseEnter={() => this.toggleButton(false)}
        >
          <img src={newIcon} alt="New note" style={this.styles.aImage} />
          <img
            src={newHover}
            alt="New note"
            style={{ opacity: this.state.hover ? 0 : 1, ...this.styles.aImage }}
          />
        </a>

        <div className="SignOut" style={this.styles.SignOut}>
          <button
            style={{
              ...this.styles.button,
              ...this.styles.SignOutButton
            }}
          >
            <i className="fa fa-sign-out" style={this.styles.i} />
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
