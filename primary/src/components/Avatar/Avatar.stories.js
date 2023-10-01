import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: [
        "twenty-four-px",
        "twenty-eight-px",
        "forty-eight-px",
        "sixteen-px",
        "forty-px",
        "sixty-four-px",
        "thirty-two-px",
        "twenty-px",
      ],
      control: { type: "select" },
    },
    variant: {
      options: [
        "purple-user",
        "office",
        "green-bg",
        "fuschia-bg",
        "pink-bg",
        "indigo-bg",
        "black-bg",
        "yellow-bg",
        "purple-bg",
        "lavender-bg",
        "rose-bg",
      ],
      control: { type: "select" },
    },
    type: {
      options: ["account", "user"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "twenty-four-px",
    variant: "purple-user",
    type: "account",
    className: {},
  },
};
