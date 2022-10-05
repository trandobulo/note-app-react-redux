import React from "react";
import { INote, ISummary } from "../../../features/note/types";
import Icon from "../../Icon/Icon";
import { ISummaryProps } from "./types";

function Summary(props: ISummaryProps): JSX.Element {
  const summaryItemName = props.category.replace(/\s/g, "-");
  const summaryContainerId = `${summaryItemName}-summary`;

  function getTotalActiveArchiveNotes(
    notes: INote[],
    category: string
  ): ISummary {
    return notes.reduce(
      function (total: ISummary, note) {
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
      <div
        className="flex bg-sky-300 px-[5px] mb-[10px] h-[55px] "
        id={summaryContainerId}
      >
        <div className="flex justify-center items-center min-w-[50px] w-[5%]">
          <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-slate-200">
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
