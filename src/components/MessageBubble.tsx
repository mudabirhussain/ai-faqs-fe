import { Box, Text } from "@chakra-ui/react";

interface MessageBubbleProps {
  role: "user" | "bot";
  content: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ role, content }) => {
  return (
    <Box
      bg={role === "user" ? "blue.700" : "cyan.600"} // New colors for contrast
      p={3}
      borderRadius="lg"
      alignSelf={role === "user" ? "flex-end" : "flex-start"}
      maxW="75%" // Narrower bubbles
      boxShadow="md"
      mb={3}
    >
      <Text
        fontWeight="bold"
        mb={1}
        color={role === "user" ? "white" : "black"}
      >
        {role === "user" ? "You" : "AI-BOT"}
      </Text>
      <Text color={role === "user" ? "white" : "black"}>{content}</Text>
    </Box>
  );
};

export default MessageBubble;
