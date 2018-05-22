import React from "react";

import NoteListElement from "./NoteListElement";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(key);
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
    console.log(key);
  }

  renderList() {
    return this.state.notes.map((note, index) => {
      return (
        <NoteListElement
          active={note.active}
          name={note.name}
          body={note.body}
          key={note.key}
          onClick={this.handleClick.bind(this, note.key)}
          onMouseEnter={this.handleMouseEnter.bind(this, note.key)}
          onMouseLeave={this.handleMouseLeave.bind(this, note.key)}
        />
      );
    });
  }

  render() {
    return (
      <div className="NoteList" style={styles.NoteList}>
        <h3 style={styles.h3}>Notes</h3>
        <ul id="notes" style={styles.notes}>
          {this.renderList()}
        </ul>
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
