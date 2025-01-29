import { Chip } from "@mui/material";
import React, { FC } from "react";

interface labelInfo {
  label?: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}
const DisabledChip: FC<labelInfo> = ({ label, color }) => {
  return (
    <>
      <Chip label={label} color={color} disabled />
    </>
  );
};

export default DisabledChip;
