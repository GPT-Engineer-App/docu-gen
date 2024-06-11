import { useState } from "react";
import { Container, VStack, Input, Button, Text } from "@chakra-ui/react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {};

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Upload Document</Text>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="teal" onClick={handleUpload}>
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

export default Upload;
