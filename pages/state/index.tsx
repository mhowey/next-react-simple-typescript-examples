import { useState } from "react";
import UserSearch from "@components/UserSearch";
import { Box } from "@chakra-ui/react";

export default function State() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <Box>
      <Box>
        <UserSearch />
      </Box>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </Box>
  );
}
