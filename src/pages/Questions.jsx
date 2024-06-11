import { Container, VStack, Text } from "@chakra-ui/react";

const Questions = () => {
  const questions = ["What is the main theme of the document?", "How does the author support their argument?", "What are the key points discussed in the document?"];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Generated Questions</Text>
        {questions.map((question, index) => (
          <Text key={index}>{question}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Questions;
