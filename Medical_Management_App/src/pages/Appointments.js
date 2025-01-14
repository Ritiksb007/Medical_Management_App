import React from "react";
import { Button, Box, Text } from "grommet";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();

  return (
    <Box pad="large" fill background="background">
      <Text size="xxlarge" weight="bold" color="brand" margin={{ bottom: "medium" }}>
        Appointments
      </Text>
      <Text margin={{ bottom: "large" }}>Check your schedule and upcoming appointments here.</Text>
      <Button label="Back to Dashboard" onClick={() => navigate("/dashboard")} primary />
    </Box>
  );
};

export default Appointments;
