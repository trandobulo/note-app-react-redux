import React from "react";
import { INoteObj } from "../Note/noteSlices";
import { getTotalActiveArchiveNotes } from "../Note/noteSlices";
import Icon from "../../Icon/Icon";

import "./Summary.css";

function Summary(props: { category: string; notes: INoteObj[] }): JSX.Element {
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
