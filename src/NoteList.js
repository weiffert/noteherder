import React from "react";

const NoteList = () => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        <a className="active">
          <li>
            <div className="note">
              <div className="note-title">Kohlrabi welsh</div>
              <div className="note-body">
                <p>
                  Veggies es bonus vobis, proinde vos postulo essum magis
                  kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
                  azuki bean garlic.
                </p>
              </div>
            </div>
          </li>
        </a>
        <a>
          <li>
            <div className="note">
              <div className="note-title">Dandelion cucumber</div>
              <div className="note-body">
                <p>
                  Gumbo beet greens corn soko endive gumbo gourd. Parsley
                  shallot courgette tatsoi pea sprouts fava bean collard greens
                  dandelion okra wakame tomato. Dandelion cucumber earthnut pea
                  peanut soko zucchini.
                </p>
              </div>
            </div>
          </li>
        </a>
        <a>
          <li>
            <div className="note">
              <div className="note-title">Prairie turnip</div>
              <div className="note-body">
                <p>
                  Nori grape silver beet broccoli kombu beet greens fava bean
                  potato quandong celery. Bunya nuts black-eyed pea prairie
                  turnip leek lentil turnip greens parsnip.
                </p>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NoteList;