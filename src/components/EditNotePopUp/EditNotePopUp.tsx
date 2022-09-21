import React from "react";
import { INoteObj } from "../../redux/NoteList";

function EditNotePopUp(props: { noteObj?: INoteObj }) {
  return (
    <div className="create-note-pop-up-overlayer">
      <div className="create-note-pop-up">
        <label
          className="create-note-pop-up__selector-label"
          htmlFor="select-category"
        >
          choose category:
        </label>
        <select
          className="create-note-pop-up__selector"
          id="select-category"
          name="select-category"
        >
          <option
            className="create-note-pop-up__selector__options"
            value="random thought"
          >
            random thought
          </option>
          <option
            className="create-note-pop-up__selector__options"
            value="idea"
          >
            idea
          </option>
          <option
            className="create-note-pop-up__selector__options"
            value="task"
          >
            task
          </option>
        </select>
        <textarea
          className="create-note-pop-up__note-input"
          id="note-input"
        ></textarea>
        <div className="create-note-pop-up__buttons-container">
          <button className="button" id="save-note-button">
            {props.noteObj === undefined ? "save note" : "edit note"}
          </button>
          <button className="button" id="cancel-note-button">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditNotePopUp;
