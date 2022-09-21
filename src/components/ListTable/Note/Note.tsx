import React, { ReactComponentElement } from "react";
import { INoteObj } from "../../../redux/NoteList";
import Icon from "../../Icon/Icon";

function Note(props: { noteObj: INoteObj }): JSX.Element {
  function parseDates(noteObj: INoteObj): string | [] {
    const dates: string[] | null = noteObj.content.match(
      /\b\d{1,2}[/.-]\d{1,2}[\\/.-]\d{4}\b/g
    );

    if (dates !== null) {
      return dates.join(", ");
    }
    return [];
  }

  const noteTamplate = (noteObj: INoteObj) => {
    const noteIcon = (noteObj: INoteObj) => {
      return (
        <div className="col_icon">
          <div className="row__category-icon">
            <Icon name={noteObj.category.replace(/\s/g, "-")} />
          </div>
        </div>
      );
    };

    const contentCols = (noteObj: INoteObj) => {
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

    const actions = (noteObj: INoteObj) => {
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
                <button className="action-icon" data-id={el.id} key={el.id}>
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
            <button className="action-icon" data-id={el.id} key={el.id}>
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

  return noteTamplate(props.noteObj);
}

export default Note;
