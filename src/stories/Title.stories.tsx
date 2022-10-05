import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";
import "./Title.css";

export default {
  title: "List/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const NoteListTitle = Template.bind({});

NoteListTitle.args = {
  list: "noteList",
};

export const SummaryListTitle = Template.bind({});

SummaryListTitle.args = {
  list: "summaryList",
};
