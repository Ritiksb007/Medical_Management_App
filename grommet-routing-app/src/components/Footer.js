import React from "react";
import { Box, Text } from "grommet";

const Footer = () => (
  <Box
    background="dark-1"
    pad={{ vertical: "small", horizontal: "large" }}
    border={{ side: "top", color: "brand", size: "small" }}
    align="center"
  >
    {/* Main Footer Content */}
    <Box width="large" direction="row" justify="center" align="center" pad="small">
      {/* Left Section */}
      <Box direction="row" gap="small" align="center">
        <Text size="small" color="light-1" weight="bold">
          © 2025 Ritik Malviya
        </Text>
        <Text size="small" color="light-1">
          | All rights reserved.
        </Text>
      </Box>
    </Box>
  </Box>
);

export default Footer;