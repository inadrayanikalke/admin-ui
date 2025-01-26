"use client";
import * as React from "react";
import { Popover, Box, Typography } from "@mui/material";

interface PopupInfo {
  text?: String;
  title?: String;
  info?: String;
}

export default function PopupBox({ text, title, info }: PopupInfo) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {text}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box p={2}>
          <Typography variant="h6" mb={1}>
            {title}
          </Typography>
          <Typography color="textSecondary">{info}</Typography>
        </Box>
      </Popover>
    </>
  );
}
