import React from "react";
import { INoteObj } from "../../../redux/NoteList";



function Note(props: {noteObj: INoteObj}){

  function parseDates(noteObj: INoteObj): string | [] {
  
    const dates: string[] | null = noteObj.content.match(
      /\b\d{1,2}[\/\.-]\d{1,2}[\\\/.-]\d{4}\b/g
    );
  
    if (dates !== null) {
      return  dates.join(", ");
    }
    return [];
  }
  // ..................................................................

  const rowTemplate = (noteObj) => {
    return `<div class="col_icon">
            <div class="row__category-icon">
              <img class="action-icon" src="./svg/${noteObj.category
                .split(" ")
                .join("-")}.svg" />
            </div>
          </div>
          ${[
            noteObj.created,
            noteObj.category,
            noteObj.content,
            parseDates(noteObj),
          ]
            .map((el) => `<p class="col_content">${el}</p>`)
            .join("")}
          <div class="row__actions-container ">
            ${(noteObj.active
              ? [
                  { src: "./svg/pencil.svg", id: "edit-note-button" },
                  {
                    src: "./svg/archive-box.svg",
                    id: "archive-note-button",
                  },
                  { src: "./svg/trash.svg", id: "delete-note-button" },
                ]
              : [
                  { src: "./svg/recovery.svg", id: "recovery-note-button" },
                  { src: "./svg/trash.svg", id: "delete-note-button" },
                ]
            )
              .map(
                (el) =>
                  `<button class="action-icon" data-id=${el.id}><img data-id=${el.id} src=${el.src} /></button>`
              )
              .join("")}
          </div>`;
  };
  return()
}
