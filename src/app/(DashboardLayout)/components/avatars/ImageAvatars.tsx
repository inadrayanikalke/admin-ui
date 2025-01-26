import React from "react";
import { Avatar, Stack } from "@mui/material";
const ImageAvatars = () => {
  return (
    <>
      <Stack direction="row" spacing={1} justifyContent="center">
        <Avatar alt="Remy Sharp" src={"/images/users/1.jpg"} />
        <Avatar alt="Travis Howard" src={"/images/users/2.jpg"} />
        <Avatar alt="Travis Howard" src={"/images/users/9.jpg"} />
        <Avatar alt="Cindy Baker" src={"/images/users/10.jpg"} />
      </Stack>
    </>
  );
};

export default ImageAvatars;
