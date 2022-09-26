import React, { useEffect, useState } from "react";
import { INote } from "../../features/note/types";
import { IPopUp, IPopUpState } from "./types";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/editNotePopUp/editNotePopUpSlice";
import { addNote, editNote } from "../../features/note/noteSlices";
import "./EditNotePopUp.css";
import { store } from "../../app/store";

function EditNotePopUp(props: IPopUp): JSX.Element {
  const dispatch = useDispatch();

  const [state, setState] = useState<IPopUpState>({
    category: "random thought",
    content: "",
  });

  useEffect(() => {
    setState({
      category: props.noteObj ? props.noteObj.category : "random thought",
      content: props.noteObj ? props.noteObj.content : "",
    });
  }, [props]);

  function handleChangeCategory(e: React.SyntheticEvent<HTMLSelectElement>) {
    setState({ ...state, category: (e.target as HTMLInputElement).value });
  }

  function handleChangeContent(e: React.SyntheticEvent<HTMLTextAreaElement>) {
    setState({ ...state, content: (e.target as HTMLInputElement).value });
  }

  function handleCancelBtn() {
    dispatch(toggle());
  }

  function saveOrEdit(obj: INote | undefined) {
    const date = new Date();
    if (obj) {
      dispatch(
        editNote({
          id: obj.id,
          category: state.category,
          content: state.content,
        })
      );
    } else {
      dispatch(
        addNote({
          category: state.category,
          content: state.content,
          date: date,
          id: `${store.getState().notes.length}`,
        })
      );
    }

    dispatch(toggle());
  }

  function handleSaveBtn() {
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
