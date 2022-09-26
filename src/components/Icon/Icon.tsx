import React from "react";
import { ReactComponent as IdeaIcon } from "../../svg/idea.svg";
import { ReactComponent as ArchiveIcon } from "../../svg/archive-box.svg";
import { ReactComponent as PencilIcon } from "../../svg/pencil.svg";
import { ReactComponent as ThoughtIcon } from "../../svg/random-thought.svg";
import { ReactComponent as RecoveryIcon } from "../../svg/recovery.svg";
import { ReactComponent as TaskIcon } from "../../svg/task.svg";
import { ReactComponent as TrashIcon } from "../../svg/trash.svg";

import "./Icon.css";

function Icon(props: { name: string; pointer?: boolean }): JSX.Element {
  const iconImg: object = {
    "archive-box": <ArchiveIcon />,
    idea: <IdeaIcon />,
    pencil: <PencilIcon />,
    "random-thought": <ThoughtIcon />,
    recovery: <RecoveryIcon />,
    task: <TaskIcon />,
    trash: <TrashIcon />,
  };

  return props.pointer ? (
    <div className="action-icon_not-active">
      {iconImg[props.name as keyof typeof iconImg]}
    </div>
  ) : (
    iconImg[props.name as keyof typeof iconImg]
  );
}

export default Icon;
