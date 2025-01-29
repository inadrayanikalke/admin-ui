"use client";
import { Avatar, Chip } from "@mui/material";
import React, { useState } from "react";

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

const OutlinedChip: React.FC<labelInfo> = ({ label, color }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleDelete = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <Chip
          variant="outlined"
          avatar={<Avatar alt="Natacha" src={"/images/users/9.jpg"} />}
          label={label}
          color={color}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default OutlinedChip;
