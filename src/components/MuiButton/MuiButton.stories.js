import React from "react";
import { Button } from "@mui/material";

export default {
  title: "Mui Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "select" },
      defaultValue: "text",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const MuiButton = Template.bind({});
MuiButton.args = {
  children: "Primary",
  color: "primary",
  variant: "text",
};
