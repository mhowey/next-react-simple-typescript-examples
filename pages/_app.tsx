import "@home/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";

import {
  ChakraProvider,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: "100%" }}>
      <ChakraProvider>
        <Box mb="2">
          <Heading>React TypeScript Examples</Heading>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline", bg: "blue.300" }}
            >
              Menu
            </MenuButton>
            <MenuList>
              <Link href="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href="/props">
                <MenuItem>Props and defaultProps</MenuItem>
              </Link>
              <Link href="/state">
                <MenuItem>State with Simple User Search</MenuItem>
              </Link>
              <Link href="/refs">
                <MenuItem>Refs for Input Focus</MenuItem>
              </Link>
              <Link href="/classes">
                <MenuItem>Classes</MenuItem>
              </Link>
              <Link href="/events">
                <MenuItem>Events</MenuItem>
              </Link>
              <Link href="/events">
                <MenuItem>Drag Events</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Divider />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
