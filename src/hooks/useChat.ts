import { useState, useCallback } from "react";
import { sendQuestionToBot } from "../api/ChatService";

export interface Message {
  role: "user" | "bot";
  content: string;
}

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const sendMessage = useCallback(async (input: string) => {
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setIsBotTyping(true);

    try {
      const botResponse = await sendQuestionToBot(input);
      setTimeout(() => {
        const botMessage: Message = { role: "bot", content: botResponse };
        setMessages((prev) => [...prev, botMessage]);
        setIsBotTyping(false);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setIsBotTyping(false);
    }
  }, []);

  return { messages, sendMessage, isBotTyping };
};

export default useChat;
