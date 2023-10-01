import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["on-click", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "on-click",
    className: {},
    fluentLocation: "/img/fluent-location-48-filled-2.svg",
  },
};
