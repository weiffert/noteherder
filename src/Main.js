import React from "react";

import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          key: 1,
          active: false,
          hover: false,
          name: "Kohlrabi welsh",
          body:
            "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
        },
        {
          key: 2,
          active: false,
          hover: false,
          name: "Dandelion cucumber",
          body:
            "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
        },
        {
          key: 3,
          active: false,
          hover: false,
          name: "Prairie turnip",
          body:
            "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."
        }
      ]
    };
  }

  handleMouseEnter(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes[index].hover = true;
    this.setState({
      notes
    });
  }

  handleMouseLeave(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes[index].hover = false;
    this.setState({
      notes
    });
  }

  handleClick(key) {
    let notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    notes.forEach(note => (note.active = false));
    notes[index].active = true;
    this.setState({
      notes
    });
  }

  makeNewNote() {
    let notes = [...this.state.notes];
    notes.forEach(note => (note.active = false));
    this.setState({
      notes
    });
  }

  updateForm(event) {
    const notes = [...this.state.notes];
    let index = notes.findIndex(note => note.active === true);
    if (index < 0) {
      notes.push({
        active: true,
        hover: false,
        name: "",
        body: "",
        key: notes.length + 1
      });
      index = notes.findIndex(note => note.active === true);
    }
    notes[index][event.target.name] = event.target.value;

    this.setState({
      notes
    });
  }

  findActiveNote() {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.active === true);

    if (index >= 0) return notes[index];
    else
      return {
        key: 0,
        body: "",
        name: "",
        active: true,
        hover: false
      };
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar makeNewNote={() => this.makeNewNote()}/>
        <NoteList
          onClick={key => this.handleClick(key)}
          onMouseEnter={key => this.handleMouseEnter(key)}
          onMouseLeave={key => this.handleMouseLeave(key)}
          notes={this.state.notes}
        />
        <NoteForm
          name={this.findActiveNote().name}
          body={this.findActiveNote().body}
          updateState={this.updateForm.bind(this)}
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
