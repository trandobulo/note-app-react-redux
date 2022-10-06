import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { store } from "../app/store";
import { Provider } from "react-redux";

import ListTable from "../components/ListTable/ListTable";
import "../components/ListTable/ListTable.css";
import "../global.css";

export default {
  title: "List/ListTable",
  component: ListTable,
} as ComponentMeta<typeof ListTable>;

const Template: ComponentStory<typeof ListTable> = (args) => (
  <Provider store={store}>
    <ListTable {...args} />
  </Provider>
);

export const NoteListTable = Template.bind({});

NoteListTable.args = {
  list: "noteList",
  notes: [
    {
      category: "random thought",
      created: "september 22, 2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      id: "0",
      active: true,
    },
    {
      category: "random thought",
      created: "september 22, 2022",
      content:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      id: "1",
      active: true,
    },
    {
      category: "idea",
      created: "september 22, 2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      id: "2",
      active: true,
    },
  ],
};

export const SummaryListTable = Template.bind({});

SummaryListTable.args = {
  list: "summaryList",
  notes: [
    {
      category: "random thought",
      created: "september 22, 2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      id: "0",
      active: true,
    },
    {
      category: "random thought",
      created: "september 22, 2022",
      content:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      id: "1",
      active: false,
    },
    {
      category: "idea",
      created: "september 22, 2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      id: "2",
      active: false,
    },
  ],
};
