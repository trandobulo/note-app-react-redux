import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";
import "./Title.css";

export default {
  title: "Example/Button",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const NoteList = Template.bind({});

NoteList.args = {
  list: "noteList",
};
