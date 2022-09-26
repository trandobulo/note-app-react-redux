import React from "react";
import { connect, useDispatch } from "react-redux";
import Note from "./Note/Note";
import Title from "./Title/Title";
import Summary from "./Summary/Summary";
import {
  INoteObj,
  getCategories,
  getCategoryArchiveNotes,
} from "./Note/noteSlices";
import { openClose } from "../EditNotePopUp/editNotePopUpSlice";

function ListTable(props: {
  notes: Array<INoteObj>;
  list: "noteList" | "summaryList";
}): JSX.Element {
  const dispatch = useDispatch();

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
            dispatch(openClose());
          }}
        >
          <button id="create-note-button">create note</button>
        </div>
      )}
    </>
  );
}

function mapStateToProps(state: { notes: INoteObj[] }, props: any) {
  const { notes } = state;
  const list = props.list;
  return { notes: notes, list: list };
}

export default connect(mapStateToProps)(ListTable);
