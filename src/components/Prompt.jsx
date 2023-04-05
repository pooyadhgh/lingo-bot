import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import { getAIResponse } from "../utils/services";
import { PROMPT_TYPES } from "../constants";
import Result from "./Result";

const Prompt = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleButtonClick = async (promptType) => {
    setResult("");

    if (!text) {
      setError("Oops! You forgot to write something.");
      return;
    }

    setLoading(promptType);

    try {
      const response = await getAIResponse(promptType, text);
      const choice = response?.choices[0]?.text;

      if (choice) {
        setResult(choice);
        setLoading("");
        setError("");
      } else {
        throw new Error(
          "Unfortunately, we couldn't find what you were looking for. It's Chat GPT not us!"
        );
      }
    } catch (err) {
      setError(err.message);
      setLoading("");
    }
  };

  const handleOnInputChange = (event) => {
    if (error || loading) {
      setError("");
      setLoading("");
    }

    setText(event.target.value);
  };

  return (
    <Container maxWidth='md'>
      {error && (
        <Alert severity='error' style={{ margin: "2rem auto" }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label='Start writing here...'
        multiline
        rows={10}
        value={text}
        onChange={handleOnInputChange}
      />

      <Container
        style={{
          margin: "3rem auto",
          display: "flex",
          justifyContent: isSmallScreen ? "flex-start" : "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.ANALYZE)}
          loading={loading === PROMPT_TYPES.ANALYZE}
        >
          Analyze my text
        </LoadingButton>

        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.CORRECT)}
          loading={loading === PROMPT_TYPES.CORRECT}
        >
          Polish my text
        </LoadingButton>

        <LoadingButton
          variant='contained'
          size='large'
          onClick={() => handleButtonClick(PROMPT_TYPES.REWRITE)}
          loading={loading === PROMPT_TYPES.REWRITE}
        >
          Rewrite my text
        </LoadingButton>
      </Container>

      {result && <Result response={result} />}
    </Container>
  );
};

export default Prompt;
