import { HStack, Link as ChakraLink, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Views from "./Views";

function App() {
  return (
    <VStack h="80vh" justify="space-evenly">
      <HStack spacing="2rem">
        <ChakraLink as={Link} to="/" fontSize="2xl">
          Sign In Page
        </ChakraLink>
        <ChakraLink as={Link} to="/home" fontSize="2xl">
          Home Page
        </ChakraLink>
        <ChakraLink as={Link} to="/account" fontSize="2xl">
          Account Page
        </ChakraLink>
      </HStack>
      <Views />
    </VStack>
  );
}

export default App;
