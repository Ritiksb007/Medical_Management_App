import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Box, Button, Text, TextInput, Form, FormField, Heading } from "grommet";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Box align="center" justify="center" pad="large" background="background" fill>
      <Box width="medium" pad="medium" elevation="medium" background="white" round="small">
        <Heading level="3" margin={{ bottom: "small" }}>Login</Heading>
        <Form>
          <FormField label="Username" required>
            <TextInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </FormField>
          <FormField label="Password" required>
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormField>
          <Box margin={{ top: "medium" }}>
            <Button label="Login" onClick={handleLogin} primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default Index;
