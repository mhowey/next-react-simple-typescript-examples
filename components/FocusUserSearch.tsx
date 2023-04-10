import { useState, useRef, useEffect } from "react";
import { users } from "./UserSearch";
import {
  Input,
  Button,
  Tag,
  Heading,
  Box,
  Stack,
  Code,
  Text,
} from "@chakra-ui/react";

const FocusUserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };
  return (
    <>
      <Box>
        <Heading size="lg">User Search w/Input Focus using Ref</Heading>
        <Text>Valid users are:</Text>
        <Box mb={2}>
          <strong>
            {users.map((user, index) => {
              return `${user.name} ${index < users.length - 1 ? ", " : ""}`;
            })}
          </strong>
          <Text>(case insensitive, no partial matching.)</Text>
        </Box>

        <Stack w="30vw" direction="row">
          <Input
            ref={inputRef}
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
              ? "Name: " + user.name + " is age: " + user.age
              : "No User Found"}
          </Heading>
        </Box>
      </Box>
      <Box m={2}>
        <Tag colorScheme="red">The Code:</Tag>
        <pre>
          <Code overflow="scroll" p={5} colorScheme="yellow" display="block">{`
import { useState, useRef, useEffect } from "react";
import { users } from "./UserSearch";
import { Input, Button, Tag, Heading, Box, Stack, Code, Text } from "@chakra-ui/react";

const FocusUserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };
  return (
    
    <Box>
        <Heading size="lg">User Search w/Input Focus using Ref</Heading>
        <Text>Valid users are:</Text>
        <Box mb={2}>
          <strong>
            {users.map((user, index) => {
              return \`\${user.name} \${index < users.length - 1 ? ", " : ""}\`;
            })}
          </strong>
          <Text>(case insensitive, no partial matching.)</Text>
        </Box>

        <Stack w="30vw" direction="row">
          <Input
            ref={inputRef}
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
              ? "Name: " + user.name + " is age: " + user.age
              : "No User Found"}
          </Heading>
        </Box>
      </Box>
  );
};

export default FocusUserSearch;
`}</Code>
        </pre>
      </Box>
    </>
  );
};

export default FocusUserSearch;
