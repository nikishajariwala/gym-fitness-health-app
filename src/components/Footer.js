import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-2.jpg";

const Footer = () => {
  return (
    <Box mt="80px" bgColor="#f3f4ff">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="100px" height="100px" />
        <Stack>
          <Typography variant="h5">Premium Gym</Typography>
        </Stack>
        <Typography variant="h5">
          Made with Love by Dr. Nikisha Jariwala
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
