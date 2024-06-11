import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Question Generator</Box>
        <Flex alignItems={"center"}>
          <Link to="/">
            <Button colorScheme="teal" variant="ghost">
              Home
            </Button>
          </Link>
          <Link to="/upload">
            <Button colorScheme="teal" variant="ghost">
              Upload Document
            </Button>
          </Link>
          <Link to="/questions">
            <Button colorScheme="teal" variant="ghost">
              Generated Questions
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
