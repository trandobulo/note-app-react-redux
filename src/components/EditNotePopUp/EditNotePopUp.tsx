import React, { useEffect, useState } from "react";
import { INote } from "../../features/note/types";
import { IPopUp, IPopUpState } from "./types";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/editNotePopUp/editNotePopUpSlice";
import { addNote, editNote } from "../../features/note/noteSlices";
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
    const monthNames: string[] = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    if (obj) {
      dispatch(
        editNote({
          id: obj.id,
          category: state.category,
          content: state.content,
        })
      );
    } else {
      const date: Date = new Date();
      dispatch(
        addNote({
          category: state.category,
          content: state.content,
          date: `${
            monthNames[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`,
          id: `${store.getState().notes.length}${Math.random()}`,
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
    <div className="flex absolute top-0 w-full h-full justify-center items-center bg-slate-900/60">
      <div className="flex flex-col bg-sky-300 w-[450px] h-[350px] p-[20px] capitalize rounded-md">
        <label className="font-medium" htmlFor="select-category">
          choose category:
        </label>
        <select
          className="mt-[10px] capitalize"
          id="select-category"
          name="select-category"
          onChange={handleChangeCategory}
          value={state.category}
        >
          {["random thought", "idea", "task"].map((el) => {
            return (
              <option value={el} key={el}>
                {el}
              </option>
            );
          })}
        </select>
        <textarea
          className="h-[200px] p-[5px] my-[10px] resize-none"
          id="note-input"
          autoFocus
          onChange={handleChangeContent}
          value={state.content}
        ></textarea>
        <div className="flex justify-between mt-[10px]">
          <button id="save-note-button" onClick={handleSaveBtn}>
            {props.noteObj ? "edit note" : "save note"}
          </button>
          <button id="cancel-note-button" onClick={handleCancelBtn}>
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
