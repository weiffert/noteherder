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
      notes,
    });
  }

  handleMouseLeave(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes[index].active = false;
    this.setState({
      notes,
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
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">{this.renderList()}</ul>
      </div>
    );
  }
}

export default NoteList;
