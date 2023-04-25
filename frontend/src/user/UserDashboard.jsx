import { Box, Flex, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import Unav from '../Pages/Unav';
import HomeRando from '../images/HomeRando.jpg';
import beach from '../images/beach.jpg';
import river from '../images/river.jpg';

const events = [
  {
    title: "Summer Camping Trip",
    date: "June 12-14, 2023",
    image: "https://bit.ly/3s8tW4c",
  },
  {
    title: "Hiking and Nature Photography Workshop",
    date: "July 22, 2023",
    image: "https://bit.ly/2QF2vC8",
  },
  {
    title: "Outdoor Yoga Retreat",
    date: "August 5-7, 2023",
    image: "beach",
  },
];

export default function CampingWebsite() {
  return (
    <Box>
      <Box><Unav /></Box>
      <Box p={6}>
        <Heading as="h2" size="xl" mb={6}>
          Upcoming Events
        </Heading>
        <Stack spacing={6}>
{events.map((event) => (
<Flex key={event.title} alignItems="center" bg="white" borderRadius="md" boxShadow="md" p={6}>
<Image src={beach} alt="Event Image" borderRadius="md" objectFit="cover" w={72} h={48} mr={6} />
<Box>
<Heading as="h3" size="md" mb={1}>
{event.title}
</Heading>
<Text fontSize="lg" color="gray.500" mb={2}>
{event.date}
</Text>
<Button colorScheme="green" size="md">
Learn More
</Button>
</Box>
</Flex>
))}
</Stack>
      </Box>
      <Box p={6}>
        <Heading as="h2" size="xl" mb={6}>
          Welcome to our Camping Site!
        </Heading>
        <Text fontSize="xl" mb={4}>
          We offer a variety of camping experiences for all levels of campers, from first-timers to seasoned pros. Our campsites are located in beautiful natural settings, and we provide all the amenities you need for a comfortable stay. Whether you're looking for a family-friendly vacation or a solo adventure, we've got you covered.
        </Text>
        <Button colorScheme="green" size="md" mb={8}>
          Book Now
        </Button>
        <Image src={HomeRando} alt="Facility Image" borderTopRadius="md" objectFit="cover" w="100%" h={64} />
      </Box>
      <Box p={6} bg="gray.100">
        <Heading as="h2" size="xl" mb={6}>
          Our Facilities
        </Heading>
        <Stack spacing={6}>
          <Flex alignItems="center" bg="white" borderRadius="md" boxShadow="md" p={6}>
            <Image src={HomeRando} alt="Facility Image" borderRadius="md" objectFit="cover" w={72} h={48} mr={6} />
            <Box>
              <Heading as="h3" size="md" mb={1}>
                Restrooms and Showers
              </Heading>
              <Text fontSize="lg" mb={4}>
                Our restrooms and showers are kept clean and well-maintained. We have separate facilities for men and women, and they are easily accessible from all campsites.
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" bg="white" borderRadius="md" boxShadow="md" p={6}>
            <Image src={beach} alt="Facility Image" borderRadius="md" objectFit="cover" w={72} h={48} mr={6} />
            <Box>
              <Heading as="h3" size="md" mb={1}>
                Campfire Rings
              </Heading>
              <Text fontSize="lg" mb={4}>
                Each campsite comes equipped with a campfire ring for cooking and warmth. We also sell firewood on-site for your convenience.
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" bg="white" borderRadius="md" boxShadow="md" p={6}>
            <Image src={river} alt="Facility Image" borderRadius="md" objectFit="cover" w={72} h={48} mr={6} />
            <Box>
              <Heading as="h3" size="md" mb={1}>
                Picnic Tables and Grills
              </Heading>
              <Text fontSize="lg" mb={4}>
                Each campsite has a picnic table and grill for outdoor dining. We also have communal picnic areas with larger grills for groups.
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}