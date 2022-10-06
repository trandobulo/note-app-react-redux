import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { store } from "../app/store";
import { Provider } from "react-redux";

import Note from "../components/ListTable/Note/Note";
import "../components/ListTable/Note/Note.css";
import "../global.css";

export default {
  title: "List/Note",
  component: Note,
} as ComponentMeta<typeof Note>;

const Template: ComponentStory<typeof Note> = (args) => (
  <Provider store={store}>
    <Note {...args} />
  </Provider>
);

export const RandomNote = Template.bind({});

RandomNote.args = {
  noteObj: {
    category: "random thought",
    created: "september 22, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "0",
    active: true,
  },
};
