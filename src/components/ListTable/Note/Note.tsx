import React from "react";
import {
  archiveUnarchiveNote,
  deleteNote,
} from "../../../features/note/noteSlices";
import { INote } from "../../../features/note/types";
import { openToEdit } from "../../../features/editNotePopUp/editNotePopUpSlice";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import "./Note.css";
import { INoteProps } from "./types";

function Note(props: INoteProps): JSX.Element {
  const dispatch = useDispatch();

  function parseDates(noteObj: INote): string | [] {
    const dates: string[] | null = noteObj.content.match(
      /\b\d{1,2}[/.-]\d{1,2}[\\/.-]\d{4}\b/g
    );

    if (dates !== null) {
      return dates.join(", ");
    }
    return [];
  }

  function handleActionBtn(e: React.SyntheticEvent<HTMLButtonElement>) {
    switch (e.currentTarget.dataset.id) {
      case "archive-note-button":
      case "recovery-note-button":
        dispatch(archiveUnarchiveNote({ id: props.noteObj.id }));
        break;
      case "delete-note-button":
        dispatch(deleteNote({ id: props.noteObj.id }));
        break;
      case "edit-note-button":
        dispatch(openToEdit({ noteObj: props.noteObj }));

        break;
      default:
    }
  }

  const noteTemplate = (noteObj: INote) => {
    const noteIcon = (noteObj: INote) => {
      return (
        <div className="col_icon">
          <div className="row__category-icon">
            <Icon name={noteObj.category.replace(/\s/g, "-")} />
          </div>
        </div>
      );
    };

    const contentCols = (noteObj: INote) => {
      return [
        noteObj.created,
        noteObj.category,
        noteObj.content,
        parseDates(noteObj),
      ].map((el, index) => (
        <p className="col_content" key={index}>
          {el}
        </p>
      ));
    };

    const actions = (noteObj: INote) => {
      if (noteObj.active) {
        return (
          <div className="row__actions-container ">
            {[
              { name: "pencil", id: "edit-note-button" },
              {
                name: "archive-box",
                id: "archive-note-button",
              },
              { name: "trash", id: "delete-note-button" },
            ].map((el) => {
              return (
                <button
                  className="action-icon"
                  data-id={el.id}
                  key={el.id}
                  onClick={handleActionBtn}
                >
                  <Icon name={el.name} data-id={el.id} />
                </button>
              );
            })}
          </div>
        );
      }

      return (
        <div className="row__actions-container ">
          {[
            { name: "recovery", id: "recovery-note-button" },
            { name: "trash", id: "delete-note-button" },
          ].map((el) => (
            <button
              className="action-icon"
              data-id={el.id}
              key={el.id}
              onClick={handleActionBtn}
            >
              <Icon data-id={el.id} name={el.name} />
            </button>
          ))}
        </div>
      );
    };

    return (
      <div className="row" id={props.noteObj.id}>
        {noteIcon(noteObj)}
        {contentCols(noteObj)}
        {actions(noteObj)}
      </div>
    );
  };

  return noteTemplate(props.noteObj);
}

export default Note;
