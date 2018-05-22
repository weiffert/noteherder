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

// .NoteList ul#notes>li {
//   height: '100px',
//   font-size: '90%',
//   cursor: 'pointer',
//   overflow: 'hidden',
// }
// .NoteList ul#notes>a,
// .NoteList ul#notes>a * {
//   -webkit-transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
//   -o-transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
//   transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
// }
// .NoteList ul#notes li .note {
//   border-top: '1px solid #eee',
//   margin: '0 2rem',
//   padding: '1rem 4px',
// }
// .NoteList ul#notes a:first-of-type li .note {
//   border-top: 'none',
// }
// .NoteList ul#notes li:hover {
//   background-color: '#008bf8',
// }
// .NoteList ul#notes li:hover,
// .NoteList ul#notes li:hover .note * {
//   color: '#fff!important',
//   text-decoration: 'none !important',
// }
// .NoteList ul#notes li:hover .note {
//   border-color: 'transparent',
// }
// .NoteList ul#notes li .note-title {
//   color: '#4a4a4a',
//   font-family: 'Fauna One',
//   font-size: '120%',
//   font-weight: '400',
//   white-space: 'nowrap',
//   overflow-x: 'hidden',
//   -o-text-overflow: 'ellipsis',
//   text-overflow: 'ellipsis',
// }
// .NoteList ul#notes li .note-body {
//   height: '54px',
//   overflow: 'hidden',
//   marginTop: '.5rem',
// }
// .NoteList ul#notes li .note-body * {
//   fontSize: '1em!important',
//   margin: '0!important',
//   padding: '0!important',
//   color: '#999!important',
//   background: 'none',
//   border: 'none',
// }
// .NoteList ul#notes li .note {
//   display: 'block',
//   height: '100px',
//   padding: '1em',
//   textDecoration: 'none',
//,
  // a: {
  //   color: "inherit",
  //   textDecoration: "none"
  // }/ }

export default NoteListElement;