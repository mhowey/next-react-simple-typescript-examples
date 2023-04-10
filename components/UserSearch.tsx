import { useState } from "react";

import {
  Input,
  Button,
  Box,
  Heading,
  Stack,
  Tag,
  Code,
  Text,
} from "@chakra-ui/react";

export const users = [
  { name: "Sarah", age: 22 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 25 },
  { name: "Matt", age: 49 },
  { name: "Thomas", age: 38 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };
  return (
    <>
      <Box>
        <Heading size="lg">Simple User Search</Heading>
        <Text>Valid users are (case insensitive, no partial matching.):</Text>
        <Box>
          <strong>
            {users.map((user, index) => {
              return `${user.name} ${index < users.length - 1 ? ", " : ""}`;
            })}
          </strong>
        </Box>
        <Stack w="30vw" direction="row">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={(e) =>
              e.key === "Enter"
                ? onClick()
                : setName((e.target as HTMLTextAreaElement).value)
            }
          />
          <Button onClick={onClick}>Find User</Button>
        </Stack>
        <Box
          border="1px solid black"
          w="30vw"
          p="10px"
          mt="10px"
          borderRadius="5px"
        >
          <Tag size="sm" colorScheme={user ? "green" : "red"}>
            Result:
          </Tag>
          <Heading size="sm">
            {user
              ? "Name: " + user.name + " - Age: " + user.age
              : "No User Found"}
          </Heading>
        </Box>
      </Box>
      <Box m={2}>
        <Code colorScheme="red">The Code:</Code>
        <pre>
          <Code overflow="scroll" p={5} colorScheme="yellow" display="block">{`
import { useState } from "react";
import { Input, Button, Box, Heading, Stack, Text, Code } from "@chakra-ui/react";

export const users = [
  { name: "Sarah", age: 22 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 25 },
  { name: "Matt", age: 49 },
  { name: "Thomas", age: 38 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <Box>
      <Heading size="lg">User Search</Heading>
      <Heading size="md" mb={2}>
        (State and TypeScript)
      </Heading>
      <Stack direction="row" w="30vw">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={onClick}>Find User</Button>
      </Stack>
      <Text>
        {user
          ? "Name: " + user.name + " age: " + user.age
          : "No User Found"}
      </Text>
    </Box>
    );
};

export default UserSearch;
      
          `}</Code>
        </pre>
      </Box>
    </>
  );
};

export default UserSearch;
