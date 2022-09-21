import React from "react";
import { INoteList } from "../../../redux/NoteList";
import Icon from "../../Icon/Icon";

import "./Summary.css";

function Summary(props: {
  category: string;
  noteList: INoteList;
}): JSX.Element {
  const summaryItemName = props.category.replace(/\s/g, "-");
  const summaryContainerId = `${summaryItemName}-summary`;

  return (
    <>
      <div className="summury" id={summaryContainerId}>
        <div className="col_icon">
          <div className="row__category-icon">
            <Icon name={summaryItemName} />
          </div>
        </div>
        <label className="col_content">{props.category}</label>
        <label className="col_content" id="${summaryItemName}-active-total">
          {props.noteList.getTotalActiveArchiveNotes(props.category).active}
        </label>
        <label className="col_content" id="${summaryItemName}-archive-total">
          {props.noteList.getTotalActiveArchiveNotes(props.category).archived}
        </label>
      </div>
      <div id={`${summaryItemName}-archive`}></div>
    </>
  );
}

export default Summary;
