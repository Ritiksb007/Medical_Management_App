import React from "react";
import { Button, Box, Text } from "grommet";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  return (
    <Box pad="large" fill background="background">
      <Text size="xxlarge" weight="bold" color="brand" margin={{ bottom: "medium" }}>
        Reports
      </Text>
      <Text margin={{ bottom: "large" }}>Generate and access reports quickly here.</Text>
      <Button label="Back to Dashboard" onClick={() => navigate("/dashboard")} primary />
    </Box>
  );
};

export default Reports;
