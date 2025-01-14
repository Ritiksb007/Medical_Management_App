import React from "react";
import { Box, Text, Anchor } from "grommet";

const Footer = () => (
  <Box
    background="dark-1"
    pad={{ vertical: "medium", horizontal: "large" }}
    border={{ side: "top", color: "brand", size: "small" }}
    align="center"
  >
    {/* Main Footer Content */}
    <Box width="xlarge" direction="row" justify="between" align="center" pad="small">
      {/* Left Section */}
      <Box direction="row" gap="small" align="center">
        <Text size="small" color="light-1" weight="bold">
          © 2025 Ritik Malviya
        </Text>
        <Text size="small" color="light-1">
          | All rights reserved.
        </Text>
      </Box>

      {/* Right Section */}
      <Box direction="row" gap="medium" justify="end">
        <Anchor
          label="Privacy Policy"
          href="#"
          color="brand"
          size="small"
          style={{ textDecoration: "none" }}
        />
        <Anchor
          label="Terms of Service"
          href="#"
          color="brand"
          size="small"
          style={{ textDecoration: "none" }}
        />
        <Anchor
          label="Contact Us"
          href="#"
          color="brand"
          size="small"
          style={{ textDecoration: "none" }}
        />
      </Box>
    </Box>
  </Box>
);

export default Footer;
