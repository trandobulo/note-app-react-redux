import React from "react";
import { useDispatch } from "react-redux";
import Note from "./Note/Note";
import Title from "./Title/Title";
import Summary from "./Summary/Summary";
import { INote } from "../../features/note/types";
import { toggle } from "../../features/editNotePopUp/editNotePopUpSlice";
import "./ListTable.css";

function ListTable(props: {
  notes: Array<INote>;
  list: "noteList" | "summaryList";
}): JSX.Element {
  const dispatch = useDispatch();

  function getCategoryArchiveNotes(notes: INote[], category: string): INote[] {
    return notes.filter(
      (note: INote) => note.category === category && !note.active
    );
  }

  function getCategories(notes: INote[]): string[] {
    const categories: string[] = [];

    for (const note of notes) {
      if (!categories.includes(note.category)) {
        categories.push(note.category);
      }
    }
    return categories;
  }

  const list = () => {
    if (props.list === "noteList") {
      const noteList: JSX.Element[] = [];

      props.notes.forEach((note) => {
        if (note.active) {
          noteList.unshift(<Note noteObj={note} key={note.id} />);
        }
      });

      return noteList;
    }

    return getCategories(props.notes).map((category) => {
      return (
        <div key={category}>
          <Summary notes={props.notes} category={category} />
          {getCategoryArchiveNotes(props.notes, category).map((note) => {
            return <Note noteObj={note} key={note.id} />;
          })}
        </div>
      );
    });
  };

  return (
    <>
      <Title list={props.list} />
      {list()}
      {props.list === "noteList" && (
        <div
          className="create-note-button-container"
          onClick={() => {
            dispatch(toggle());
          }}
        >
          <button id="create-note-button">create note</button>
        </div>
      )}
    </>
  );
}

export default ListTable;
