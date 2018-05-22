import React from "react";

const NoteListElement = () => {
  return (
    <a className={this.props.active}>
      <li>
        <div className="note">
          <div className="note-title">{this.props.name}</div>
          <div className="note-body">
            <p>{this.props.body}</p>
          </div>
        </div>
      </li>
    </a>
  );
};

export default NoteListElement;