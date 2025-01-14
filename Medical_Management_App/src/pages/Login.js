import React, { useState } from "react";
import { Box, Button, Form, FormField, Text, TextInput } from "grommet";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Hardcoded credentials
  const validUsername = "admin";
  const validPassword = "admin";

  const handleSubmit = () => {
    if (
      credentials.username === validUsername &&
      credentials.password === validPassword
    ) {
      setError("");
      onLogin(); // Trigger login on successful validation
    } else {
      setError("Invalid username or password."); // Show error on invalid credentials
    }
  };

  return (
    <Box fill align="center" justify="center" background="light-2">
      <Box width="medium" pad="medium" background="white" round="small" elevation="medium">
        <Text size="large" weight="bold" margin={{ bottom: "medium" }}>
          Medical Specialist Login
        </Text>
        <Form
          value={credentials}
          onChange={(nextValue) => setCredentials(nextValue)}
          onSubmit={handleSubmit}
        >
          <FormField name="username" label="Username">
            <TextInput
              name="username"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={(event) =>
                setCredentials({ ...credentials, username: event.target.value })
              }
            />
          </FormField>
          <FormField name="password" label="Password">
            <TextInput
              name="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
            />
          </FormField>
          {error && (
            <Text color="status-critical" margin={{ top: "small", bottom: "small" }}>
              {error}
            </Text>
          )}
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Login" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default Login;