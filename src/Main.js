import React from "react";

import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: this.blankNote(),
      notes: []
    };

    window.addEventListener("beforeunload", this.saveToLocalStorage);
  }

  saveToLocalStorage = () => {
    window.localStorage.setItem("state", JSON.stringify(this.state));
  };

  loadFromLocalStorage = () => {
    const data = window.localStorage.getItem("state");
    console.log(data);
    try {
      this.setState(JSON.parse(data));
    } catch (error) {
      this.setState({
        activeNote: this.blankNote(),
        notes: []
      });
    }
  };

  componentDidMount() {
    this.loadFromLocalStorage();
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
    debugger;
  }

  handleMouseEnter = note => {
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.key === note.key);
    notes[index].hover = true;
    this.setState({
      notes
    });
  };

  handleMouseLeave = note => {
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.key === note.key);
    notes[index].hover = false;
    this.setState({
      notes
    });
  };

  handleClick = note => {
    this.setState({
      activeNote: note
    });
  };

  clearNoteForm = () => {
    this.setState({
      activeNote: this.blankNote()
    });
  };

  updateForm = (note, event) => {
    const notes = [...this.state.notes];
    let index = notes.findIndex(n => n.key === note.key);
    if (index < 0) {
      note.key = Date.now();
      notes.push(note);
    } else {
      notes[index] = note;
    }

    this.setState({
      notes,
      activeNote: note
    });
  };

  deleteNote = (note, event) => {
    const notes = [...this.state.notes];
    let index = notes.findIndex(n => n.key === note.key);
    if (index >= 0) {
      notes.splice(index, 1);

      this.setState({
        notes
      });
    }
    this.setState({
      activeNote: this.blankNote()
    });
  };

  blankNote = () => {
    return {
      key: 0,
      body: "",
      name: "",
      active: false,
      hover: false
    };
  };

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar makeNewNote={this.clearNoteForm} />
        <NoteList
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          notes={this.state.notes}
        />
        <NoteForm
          note={this.state.activeNote}
          onChange={this.updateForm}
          onClick={this.deleteNote}
        />
      </div>
    );
  }
}

const style = {
  display: "flex",
  height: "100vh",
  alignItems: "stretch"
};

export default Main;
