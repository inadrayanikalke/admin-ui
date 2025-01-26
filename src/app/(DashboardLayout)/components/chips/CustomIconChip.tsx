import { Chip } from "@mui/material";
import { IconChecks } from "@tabler/icons-react";

import React, { FC } from "react";

interface labelInfo {
  label?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}

const CustomIconChip: FC<labelInfo> = ({ label, color }) => {
  const handleDelete = () => {};
  return (
    <>
      <Chip
        label={label}
        color={color}
        onDelete={handleDelete}
        deleteIcon={<IconChecks width={20} />}
      />
    </>
  );
};

export default CustomIconChip;
