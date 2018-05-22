import React from "react";

import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        key: 0,
        active: true,
        name: "",
        body: "",
      },
      notes: [
        {
          key: 1,
          active: false,
          name: "Kohlrabi welsh",
          body:
            "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
        },
        {
          key: 2,
          active: false,
          name: "Dandelion cucumber",
          body:
            "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
        },
        {
          key: 3,
          active: false,
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

  handleClick(key) {
    const notes = [...this.state.notes];
    const index = notes.findIndex(note => note.key === key);
    this.setState({
      active: notes[index],
    })
  }
  
  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar />
        <NoteList
          onClick={key => this.handleClick(key)}
          onMouseEnter={key => this.handleMouseEnter(key)}
          onMouseLeave={key => this.handleMouseLeave(key)}
          notes={this.state.notes}
        />
        <NoteForm name={this.state.active.name} body={this.state.active.body}/>
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
