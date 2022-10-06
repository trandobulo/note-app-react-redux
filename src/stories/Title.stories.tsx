import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "../components/ListTable/Title/Title";
import "../components/ListTable/Title/Title.css";
import "../global.css";

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
