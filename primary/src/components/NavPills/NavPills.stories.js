import { NavPills } from ".";

export default {
  title: "Components/NavPills",
  component: NavPills,
  argTypes: {
    alignment: {
      options: ["right", "center", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    alignment: "right",
    className: {},
    tabClassName: {},
    textClassName: {},
    text: "Active",
    text1: "Links",
    tabClassNameOverride: {},
    hasTab: true,
  },
};
