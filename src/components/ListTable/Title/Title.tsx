import React from "react";
import Icon from "../../Icon/Icon";
import "./Title.css";

function Title(props: { list: "noteList" | "summaryList" }): JSX.Element {
  if (props.list === "noteList") {
    return (
      <div className="row_title">
        <div className="col_icon"></div>
        {["created", "category", "content", "dates"].map((el) => {
          return (
            <label className="col_title" key={el}>
              {el}
            </label>
          );
        })}
        <div className="row__actions-container">
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
    <div className="row_title">
      <div className="col_icon"></div>
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
