import React, { useEffect, useState } from "react";
import { INoteObj } from "../ListTable/Note/noteSlices";
import { useDispatch } from "react-redux";
import { openClose } from "./editNotePopUpSlice";
import { addNote, editNote } from "../ListTable/Note/noteSlices";
import "./EditNotePopUp.css";

function EditNotePopUp(props: {
  active: boolean;
  noteObj?: INoteObj;
}): JSX.Element {
  const dispatch = useDispatch();

  const [state, setState] = useState<{
    category: string;
    content: string;
  }>({
    category: "random thought",
    content: "",
  });

  useEffect(() => {
    setState({
      category: props.noteObj ? props.noteObj.category : "random thought",
      content: props.noteObj ? props.noteObj.content : "",
    });
  }, [props.noteObj]);

  function handleChangeCategory(e: React.SyntheticEvent<HTMLElement>) {
    setState({ ...state, category: (e.target as HTMLInputElement).value });
  }

  function handleChangeContent(e: React.SyntheticEvent<HTMLTextAreaElement>) {
    setState({ ...state, content: (e.target as HTMLInputElement).value });
  }

  function handleCancelBtn() {
    dispatch(openClose());
  }

  function handleSaveBtn() {
    function saveOrEdit(obj: INoteObj | undefined) {
      if (obj) {
        dispatch(
          editNote({
            id: obj.id,
            category: state.category,
            content: state.content,
          })
        );
        dispatch(openClose());
      } else {
        dispatch(
          addNote({
            category: state.category,
            content: state.content,
          })
        );
        dispatch(openClose());
      }
    }

    try {
      if (state.content.length >= 3) {
        saveOrEdit(props.noteObj);
      } else {
        throw new Error("note must have at least 3 characters");
      }
    } catch (e) {
      alert(e);
    }
  }

  return props.active ? (
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
          onChange={handleChangeCategory}
          value={state.category}
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
          autoFocus
          onChange={handleChangeContent}
          value={state.content}
        ></textarea>
        <div className="create-note-pop-up__buttons-container">
          <button
            className="button"
            id="save-note-button"
            onClick={handleSaveBtn}
          >
            {props.noteObj ? "edit note" : "save note"}
          </button>
          <button
            className="button"
            id="cancel-note-button"
            onClick={handleCancelBtn}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default EditNotePopUp;
