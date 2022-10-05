import React from "react";
import Icon from "../../Icon/Icon";

function Title(props: { list: "noteList" | "summaryList" }): JSX.Element {
  if (props.list === "noteList") {
    return (
      <div className="flex items-center h-[50px] bg-sky-600 min-w-[600px] rounded-lg my-[10px]">
        <div className="flex justify-center items-center min-w-[50px] w-[5%]"></div>
        {["created", "category", "content", "dates"].map((el) => {
          return (
            <label className="col_title" key={el}>
              {el}
            </label>
          );
        })}
        <div className="flex justify-end w-[15%] pr-[20px] items-center">
          <div className="action-icon_not-active">
            <Icon name="archive-box" />
          </div>
          <div className="action-icon_not-active">
            <Icon name="trash" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center h-[50px] bg-sky-600 min-w-[600px] rounded-lg my-[10px]">
      <div className="flex justify-center items-center min-w-[50px] w-[5%]"></div>
      {["notes category", "active", "archived"].map((el) => {
        return (
          <label className="col_title" key={el}>
            {el}
          </label>
        );
      })}
    </div>
  );
}

export default Title;
