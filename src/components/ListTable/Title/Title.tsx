import React from "react";
import Icon from "../../Icon/Icon";

function Title(props: { list: "noteList" | "summaryList" }): JSX.Element {
  if (props.list === "noteList") {
    return (
      <div className="row_title">
        <div className="col_icon"></div>
        <label className="col_title">created</label>
        <label className="col_title">category</label>
        <label className="col_title">content</label>
        <label className="col_title">dates</label>
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
      <label className="col_title">note category</label>
      <label className="col_title">active</label>
      <label className="col_title">archived</label>
    </div>
  );
}

export default Title;
