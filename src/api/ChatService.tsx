import axios from "axios";

const API_URL = "http://localhost:8080/ai-bot/chat";

export const sendQuestionToBot = async (question: string): Promise<string> => {
  try {
    const response = await axios.post<string>(API_URL, { question });
    return response.data; // Expect a simple string response
  } catch (error) {
    console.error("Error sending question:", error);
    return "Sorry, I couldn’t retrieve the information. Please try again.";
  }
};
