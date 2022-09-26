import React from "react";
import { INoteObj, ISummary } from "../../../features/note/noteSlices";
import Icon from "../../Icon/Icon";

import "./Summary.css";

function Summary(props: { category: string; notes: INoteObj[] }): JSX.Element {
  const summaryItemName = props.category.replace(/\s/g, "-");
  const summaryContainerId = `${summaryItemName}-summary`;

  function getTotalActiveArchiveNotes(
    notes: INoteObj[],
    category: string
  ): ISummary {
    return notes.reduce(
      function (total: { active: number; archived: number }, note) {
        if (note.category === category) {
          if (note.active) {
            total.active++;
            return total;
          } else {
            total.archived++;
            return total;
          }
        }
        return total;
      },
      { active: 0, archived: 0 }
    );
  }

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
          {getTotalActiveArchiveNotes(props.notes, props.category).active}
        </label>
        <label className="col_content" id="${summaryItemName}-archive-total">
          {getTotalActiveArchiveNotes(props.notes, props.category).archived}
        </label>
      </div>
      <div id={`${summaryItemName}-archive`}></div>
    </>
  );
}

export default Summary;
