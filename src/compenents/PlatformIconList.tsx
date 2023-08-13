import {
  FaWindows,
  FaXbox,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    placestation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack>
      {platform.map((p) => (
        <Icon
          key={p.id}
          as={iconMap[p.slug]}
          className="Icon"
          marginY={"8px"}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
