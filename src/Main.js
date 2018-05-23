import React from "react";

import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: this.blankNote(),
      notes: [
        {
          key: 1,
          hover: false,
          name: "Kohlrabi welsh",
          body:
            "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
        },
        {
          key: 2,
          hover: false,
          name: "Dandelion cucumber",
          body:
            "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
        },
        {
          key: 3,
          hover: false,
          name: "Prairie turnip",
          body:
            "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."
        }
      ]
    };
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
