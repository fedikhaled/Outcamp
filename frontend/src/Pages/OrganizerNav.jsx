import { Box, Button, Flex, Avatar, VStack, Icon } from "@chakra-ui/react";
import { MdEvent, MdPerson, MdAddCircleOutline, MdExitToApp } from "react-icons/md";

export default function OrganizerDash() {
  return (
    <Flex>
      <Box w="250px" bg="gray.100" p={4}>
        <VStack spacing={6} align="stretch">
          <Avatar name="John Doe" src="/avatar.png" size="2xl" />
          <Button
            colorScheme="blue"
            size="lg"
            variant="solid"
            leftIcon={<Icon as={MdAddCircleOutline} boxSize={6} />}
          >
            Create Event
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            variant="outline"
            leftIcon={<Icon as={MdEvent} boxSize={6} />}
          >
            My Events
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            variant="outline"
            leftIcon={<Icon as={MdPerson} boxSize={6} />}
          >
            Profile
          </Button>
          <Button
            colorScheme="red"
            size="lg"
            variant="solid"
            leftIcon={<Icon as={MdExitToApp} boxSize={6} />}
          >
            Logout
          </Button>
        </VStack>
      </Box>
      <Box flex="1" p={8} bg="gray.200">
        {/* Main content of the dashboard */}
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          {/* Add your content here */}
        </Box>
      </Box>
    </Flex>
  );
}

 
