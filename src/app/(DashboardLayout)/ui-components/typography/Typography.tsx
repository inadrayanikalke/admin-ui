"use client";
import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
  heading1?: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
  text?: string;
  primaryText?: string;
  secondaryText?: string;
  info?: string;
  warning?: string;
  error?: string;
  success?: string;
  subtitle?: string;
}
const TypoGraphy: FC<HeaderProps> = ({
  heading1,
  heading2,
  heading3,
  heading4,
  text,
  primaryText,
  secondaryText,
  info,
  warning,
  error,
  success,
  subtitle,
}) => {
  return (
    <Box>
      <Typography variant="h1">{heading1}</Typography>
      <Typography variant="h2">{heading2}</Typography>
      <Typography variant="h3">{heading3}</Typography>
      <Typography variant="h4">{heading4}</Typography>
      <Typography variant="h5">{text}</Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.primary.main }}
      >
        {primaryText}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        {secondaryText}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.info.main }}
      >
        {info}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.warning.main }}
      >
        {warning}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.error.main }}
      >
        {error}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.success.main }}
      >
        {success}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  );
};

export default TypoGraphy;
