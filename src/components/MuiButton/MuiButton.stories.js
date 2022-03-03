import React from "react";
import { Button } from "@mui/material";

export default {
  title: "Mui Button",
  component: Button,
};

export const MuiPrimary = () => (
  <Button variant="contained" color="primary">
    Mui - Primary
  </Button>
);
export const MuiSecondary = () => (
  <Button variant="contained" color="secondary">
    Mui - Secondary
  </Button>
);
