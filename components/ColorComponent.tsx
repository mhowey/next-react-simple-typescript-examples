import React from "react";
import { Button, Heading, Box } from "@chakra-ui/react";

/**
 * Multiple ways to write a functional component
 * while handling props in TypeScript
 */

interface ColorProps {
  color?: string;
  onClick: () => void;
  children?: typeof React.Children;
}

export const ColorComponent = ({ color, onClick }: ColorProps) => {
  return (
    <div>
      <Heading size="lg" style={{ color: color }}>
        ColorComponent Color: {color}
      </Heading>
      <Button onClick={onClick}>Click ColorComponent</Button>
    </div>
  );
};
ColorComponent.defaultProps = {
  color: "green",
};

// here were are declaring that ColorComponentAlternate is a React Functional Component (i.e. React.FC)
export const ColorComponentAlternate: React.FC<ColorProps> = ({
  color,
  onClick,
}) => {
  return (
    <Box>
      <Heading size="lg" style={{ color: color }}>
        Color Component Alternate: {color}
      </Heading>
      <Button onClick={onClick}>Click ColorComponentAlternative</Button>
    </Box>
  );
};
// now we can use defaultProps because we declared this component with React.FC
ColorComponentAlternate.defaultProps = {
  color: "purple",
};
