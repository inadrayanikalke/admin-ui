"use client";
import React, { FC } from "react";
import OutlinedChip from "../../components/chips/OutlinedChip";
import CustomIconChip from "../../components/chips/CustomIconChip";
import DisabledChip from "../../components/chips/DisabledChip";
import { Chip } from "@mui/material";

type labelInfo = {
  label: string;
  outlinedChip: boolean;
  customChip: boolean;
  disabledChip: boolean;
  chip: boolean;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};

const Chips = ({
  label,
  outlinedChip = false,
  customChip = false,
  disabledChip = false,
  chip = false,
  color,
}: labelInfo) => {
  return (
    <>
      {outlinedChip && <OutlinedChip label={label} color={color} />}
      {customChip && <CustomIconChip label={label} color={color} />}
      {disabledChip && <DisabledChip label={label} color={color} />}
      {chip && <Chip color={color} label={label} />}
    </>
  );
};
export default Chips;
