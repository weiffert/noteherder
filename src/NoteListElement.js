import React from "react";

const NoteListElement = props => {
  return (
    <a
      style={styles.a}
      onClick={() => props.onClick(props.note)}
      onMouseEnter={() => props.onMouseEnter(props.note)}
      onMouseLeave={() => props.onMouseLeave(props.note)}
    >
      <li
        style={props.hover ? { ...styles.li, ...styles.liHover } : styles.li}
      >
        <div
          className="note"
          style={
            props.hover
              ? { ...styles.note, ...styles.liHoverNote }
              : styles.note
          }
        >
          <div
            className="note-title"
            style={
              props.hover
                ? { ...styles.noteTitle, ...styles.liHoverText }
                : styles.noteTitle
            }
          >
            {props.note.name}
          </div>
          <div
            className="note-body"
            style={
              props.hover
                ? { ...styles.noteBody, ...styles.liHoverText }
                : styles.noteBody
            }
          >
            <p>{props.note.body}</p>
          </div>
        </div>
      </li>
    </a>
  );
};

const styles = {
  li: {
    height: "100px",
    fontSize: "90%",
    cursor: "pointer",
    overflow: "hidden"
  },
  a: {
    transition: "background-color .1s ease-in-out, color .1s ease-in-out",
    color: "inherit",
    textDecoration: "none"
  },
  note: {
    borderTop: "1px solid #eee",
    margin: "0 2rem",
    padding: "1rem 4px",
    display: "block",
    height: "100px",
    textDecoration: "none"
  },
  firstNote: {
    borderTop: "none"
  },
  liHover: {
    backgroundColor: "#008bf8"
  },
  liHoverText: {
    color: "#fff",
    textDecoration: "none"
  },
  liHoverNote: {
    borderColor: "transparent"
  },
  noteTitle: {
    color: "#4a4a4a",
    fontFamily: "Fauna One",
    fontSize: "120%",
    fontWeight: "400",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    textOverflow: "ellipsis"
  },
  noteBody: {
    height: "54px",
    overflow: "hidden",
    marginTop: ".5rem"
  },
  noteBodyChildren: {
    fontSize: "1em",
    margin: "0",
    padding: "0",
    color: "#999",
    background: "none",
    border: "none"
  }
};

export default NoteListElement;
