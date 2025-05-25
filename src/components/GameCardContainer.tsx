import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const shadowColor = useColorModeValue(
    "rgba(62, 161, 219, 0.6)", // Light mode: neon blue
    "rgba(86, 204, 242, 0.5)" // Dark mode: bright cyan
  );

  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: `0 0 20px ${shadowColor}`,
        filter: "brightness(1.1)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
