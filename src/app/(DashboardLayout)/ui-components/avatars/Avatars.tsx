"use client";
import * as React from "react";
import LetterAvatars from "../../components/avatars/LetterAvatars";
import ImageAvatars from "../../components/avatars/ImageAvatars";
import BadgeAvatars from "../../components/avatars/BadgeAvatars";
import IconAvatars from "../../components/avatars/IconAvatars";

interface AvatarProps {
  imageType: string;
}
const AvatarGroups: React.FC<AvatarProps> = ({ imageType }) => {
  return (
    <>
      {imageType === "letter" && <LetterAvatars />}
      {imageType === "image" && <ImageAvatars />}
      {imageType === "badge" && <BadgeAvatars />}
      {imageType === "icon" && <IconAvatars />}
    </>
  );
};
export default AvatarGroups;
