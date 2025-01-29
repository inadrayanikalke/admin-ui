import React from "react";
import { Avatar, Stack, AvatarGroup, Badge } from "@mui/material";

const BadgeAvatars = () => {
  return (
    <>
      <Stack direction="row" spacing={1} justifyContent="center">
        <AvatarGroup>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                sx={{ width: 22, height: 22 }}
                alt="Remy Sharp"
                src={"/images/users/1.jpg"}
              />
            }
          >
            <Avatar alt="Travis Howard" src={"/images/users/1.jpg"} />
          </Badge>
        </AvatarGroup>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          color="success"
        >
          <Avatar alt="Remy Sharp" src={"/images/users/2.jpg"} />
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          color="warning"
        >
          <Avatar alt="Remy Sharp" src={"/images/users/10.jpg"} />
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          color="error"
        >
          <Avatar alt="Remy Sharp" src={"/images/users/9.jpg"} />
        </Badge>
      </Stack>
    </>
  );
};

export default BadgeAvatars;
