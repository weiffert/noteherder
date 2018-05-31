import React from "react";
import { Route, Switch } from "react-router-dom";

import base from "./base";
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    base.syncState(`notes/${this.props.user}`, {
      context: this,
      state: "notes",
      asArray: true,
    });
  }

  loadFromLocalStorage = () => {
    const data = window.localStorage.getItem("notes");
    try {
      this.setState({ notes: JSON.parse(data) });
    } catch (error) {
      this.setState({
        notes: [],
      });
    }
  };

  saveToLocalStorage = () => {
    window.localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  handleMouseEnter = note => {
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.id === note.id);
    notes[index].hover = true;
    this.setState({
      notes,
    });
  };

  handleMouseLeave = note => {
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.id === note.id);
    notes[index].hover = false;
    this.setState({
      notes,
    });
  };

  updateForm = (note, event) => {
    let shouldRedirect = false;
    const notes = [...this.state.notes];
    let index = notes.findIndex(n => n.id === note.id);
    if (index < 0) {
      note.id = Date.now();
      notes.push(note);
      shouldRedirect = true;
    } else {
      notes[index] = note;
    }

    const sortedNotes = notes.sort((a, b) => b.lastEdited - a.lastEdited);

    this.setState({
      notes: sortedNotes
    });

    if (shouldRedirect) this.props.history.push(`/notes/${note.id}`);
  };

  deleteNote = (note, event) => {
    const notes = [...this.state.notes];
    let index = notes.findIndex(n => n.id === note.id);
    if (index >= 0) {
      notes.splice(index, 1);

      this.setState({
        notes,
      });

      this.props.history.push("/notes");
    }
  };

  render() {
    const formProps = {
      notes: this.state.notes,
      onChange: this.updateForm,
      onClick: this.deleteNote,
    };

    return (
      <div className="Main" style={style}>
        <Sidebar
          makeNewNote={this.clearNoteForm}
          signOut={this.props.signOut}
        />
        <NoteList
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          notes={this.state.notes}
        />
        <Switch>
          <Route
            path="/notes/:id"
            render={navProps => <NoteForm {...formProps} {...navProps} />}
          />
          <Route
            path="/notes"
            render={navProps => <NoteForm {...formProps} {...navProps} />}
          />
        </Switch>
      </div>
    );
  }
}

const style = {
  display: "flex",
  height: "100vh",
  alignItems: "stretch",
};

export default Main;
