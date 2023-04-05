import { PROMPT_QUESTIONS } from "../constants";

const getPromptText = (promptType, text) => {
  const question = PROMPT_QUESTIONS[promptType];
  const promptText = question + "\n\n" + text + "";
  return promptText;
};

export const getAIResponse = async (promptType, text) => {
  const prompt = getPromptText(promptType, text);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  };
  const body = JSON.stringify({
    prompt,
    model: "text-davinci-003",
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.8,
    presence_penalty: 0.0,
  });
  const options = {
    method: "POST",
    headers,
    body,
  };

  const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
  const result = await response.json();
  return result;
};
