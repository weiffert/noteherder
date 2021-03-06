import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.blankNote(),
    };
  }

  componentDidUpdate = () => {
    const newId = this.props.match.params.id || "";
    const oldId = this.state.note.id || "";

    if (newId !== oldId) {
      const index = this.props.notes.findIndex(
        note => note.id.toString() === newId
      );
      const note = this.props.notes[index] || this.blankNote();

      if (note.id !== this.state.note.id)
        this.setState({
          note,
        });
    }
  };

  blankNote = () => {
    return {
      id: 0,
      body: "",
      name: "",
      lastEditedString: "",
      lastEdited: 0,
      active: false,
      hover: false,
    };
  };

  updateNote = event => {
    const note = { ...this.state.note };
    note[event.target.name] = event.target.value;

    let date = new Date();

    note.lastEditedString = `${date.getHours()}:${
      date.getMinutes() < 10 ? `0` : ""
    }${date.getMinutes()} on ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    note.lastEdited = Date.now();

    this.setState({ note }, () => this.props.onChange(this.state.note, event));
  };

  render = () => {
    return (
      <div className="NoteForm" style={styles.NoteForm}>
        <div className="form-actions" style={styles.formActions}>
          <button
            type="button"
            style={styles.button}
            onClick={event => this.props.onClick(this.state.note, event)}
          >
            <i className="fas fa-trash-alt" style={styles.i} />
          </button>
        </div>
        <form
          style={styles.form}
          onChange={event => this.updateNote(event)}
          onSubmit={event => event.preventDefault()}
        >
          <p>
            <input
              type="text"
              name="name"
              placeholder="Title your note"
              value={this.state.note.name}
              style={styles.input}
            />
          </p>
          {this.state.note.lastEdited ? (
            <p>Updated on {this.state.note.lastEditedString}</p>
          ) : (
            ""
          )}
          <textarea
            name="body"
            style={styles.textarea}
            value={this.state.note.body}
          />
        </form>
      </div>
    );
  };
}

const styles = {
  NoteForm: {
    flexGrow: "1",
    padding: "0 3rem",
  },
  formActions: {
    paddingTop: "1rem",
    marginLeft: "-2rem",
    display: "flex",
    alignContent: "center",
  },
  button: {
    border: "none",
    background: "none",
    padding: "0",
  },
  buttonSubmit: {
    backgroundColor: "#008bf8",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "1.4rem",
    padding: "1rem",
  },
  i: {
    color: "#999",
    fontSize: "2rem",
    margin: "0",
  },
  form: {
    margin: "0 auto",
    maxWidth: "80rem",
  },
  input: {
    border: "none",
    fontSize: "200%",
    fontFamily: "Fauna One",
    color: "#008bf8",
    fontWeight: "400",
    width: "100%",
    outline: "none",
  },
  textarea: {
    borderColor: "#eee",
    width: "100%",
    height: "calc(100vh - 140px)",
    fontSize: "1.3em",
  },
};

export default NoteForm;
