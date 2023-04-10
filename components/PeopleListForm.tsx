import { useState } from "react";
import { Input, Button, Heading } from "@chakra-ui/react";

interface PeopleListFormProps {
  //   onChange: () => void;
  setPeople: ([]) => void;
  people: [];
}

export default function PeopleListForm({
  setPeople,
  people,
}: PeopleListFormProps) {
  const [person, setPerson] = useState("");
  return (
    <div>
      <Heading size="lg">People List Form</Heading>
      <Input
        onChange={(e) => setPerson(e.target.value)}
        type="text"
        name="personInput"
      />
      <Button onClick={() => setPeople([...people, person])}>Add Person</Button>
    </div>
  );
}
