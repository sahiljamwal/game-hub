import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const Expandabletext = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
        size="xs"
        fontWeight={"bold"}
        marginLeft={1}
      >
        Show {isExpanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default Expandabletext;
