import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eliton de Souza</Text>
          <Text color="gray.300" fontSize="sm">
            elitondesenvolvedor@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Eliton de Souza"
        src="http://github.com/ElitonSouzaDev.png"
      />
    </Flex>
  );
}
