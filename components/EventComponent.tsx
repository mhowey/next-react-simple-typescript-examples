import { useState } from "react";
import { Input, Box, Heading, Badge, Text } from "@chakra-ui/react";
const EventComponent: React.FC = () => {
  const [dragEndY, setDragEndY] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientY);
  };
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    setDragEndX(event.clientX);
    setDragEndY(event.clientY);
  };
  return (
    <div>
      <Heading size="lg">Event Component</Heading>
      <div>
        <Input onChange={onChange} />
        <Text>Drag End X: {dragEndX}</Text>
        <Text>Drag End Y: {dragEndY}</Text>
        <Badge draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
          Drag me!
        </Badge>
      </div>
    </div>
  );
};

export default EventComponent;
