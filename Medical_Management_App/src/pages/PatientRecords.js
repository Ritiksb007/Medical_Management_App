import React from "react";
import { Button, Box, Text } from "grommet";
import { useNavigate } from "react-router-dom";

const PatientRecords = () => {
  const navigate = useNavigate();

  return (
    <Box pad="large" fill background="background">
      <Text size="xxlarge" weight="bold" color="brand" margin={{ bottom: "medium" }}>
        Patient Records
      </Text>
      <Text margin={{ bottom: "large" }}>Manage patient data securely here.</Text>
      <Button label="Back to Dashboard" onClick={() => navigate("/dashboard")} primary />
    </Box>
  );
};

export default PatientRecords;
