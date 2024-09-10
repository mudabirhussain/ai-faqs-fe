import {
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Spinner,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import MessageBubble from "./components/MessageBubble";
import useChat from "./hooks/useChat";

const App: React.FC = () => {
  const { messages, sendMessage, isBotTyping } = useChat();
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <Box
      p={4}
      bg="gray.800" // Slightly lighter background
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      {/* Main Chat Container */}
      <VStack
        spacing={4}
        align="stretch"
        w="100%"
        h="100%"
        maxW="800px" // Narrower conversation width
        bg="gray.800"
        justifyContent="space-between"
      >
        {/* Headline */}
        <Heading as="h1" size="lg" textAlign="center" mb={4} color="cyan.400">
          FAQs AI BOT
        </Heading>

        {/* Chat messages */}
        <Box
          flexGrow={1}
          p={4}
          overflowY="auto"
          bg="gray.800"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          spacing={3}
        >
          {messages.map((msg, index) => (
            <MessageBubble key={index} role={msg.role} content={msg.content} />
          ))}

          {isBotTyping && (
            <Flex justifyContent="flex-start" alignItems="center">
              <Spinner size="sm" color="cyan.400" />
              <Text ml={2} color="gray.300">
                AI-BOT is typing...
              </Text>
            </Flex>
          )}
        </Box>

        {/* Input and Send button */}
        <HStack spacing={2} mt={4} px={4}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Indoo Commerce..."
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.400" }}
            boxShadow="sm"
            flexGrow={1}
          />
          <Button colorScheme="cyan" onClick={handleSend}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default App;
