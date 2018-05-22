import React from "react";

import NoteListElement from "./NoteListElement";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  handleMouseEnter(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes[index].active = true;
    this.setState({
      notes
    });
  }

  handleMouseLeave(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes[index].active = false;
    this.setState({
      notes
    });
  }

  renderList() {
    this.state.notes.map((note, index) => {
      return (
        <NoteListElement
          active={note.active}
          name={note.name}
          body={note.body}
          key={index}
          onMouseEnter={this.handleMouseEnter.bind(this, index)}
          onMouseLeave={this.handleMouseLeave.bind(this, index)}
        />
      );
    });
  }

  render() {
    return (
      <div className="NoteList" style={styles.NoteList}>
        <h3 style={styles.h3}>Notes</h3>
        <ul id="notes" style={styles.notes}>{this.renderList()}</ul>
      </div>
    );
  }
}

const styles = {
  NoteList: {
    borderLeft: "1px solid #eee",
    borderRight: "1px solid #eee",
    width: "30rem"
  },
  // @media (max-width: 800px) {
  //   .NoteList {
  //     width: 20rem,
  //   }
  // }
  h3: {
    color: "#999",
    textTransform: "uppercase",
    fontSize: "2rem",
    fontFamily: "Oxygen",
    fontWeight: "300",
    letterSpacing: "3px",
    margin: "20px 2rem"
  },
  notes: {
    borderTop: "1px solid #eee",
    overflowY: "scroll",
    height: "calc(100vh - 72px)",
    listStyle: "none",
    marginTop: "1em",
    padding: "0",
    width: "100%",
    color: "#999"
  }
};

export default NoteList;