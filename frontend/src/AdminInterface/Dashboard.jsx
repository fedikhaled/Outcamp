import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton
} from '@chakra-ui/react';
import { RiDashboardLine, RiCalendarLine, RiUserLine, RiFileListLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Users from './Organizers'
export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' }
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      date: '2023-05-01',
      total: 100
    },
    {
      id: 2,
      customer: 'Jane Smith',
      date: '2023-05-02',
      total: 200
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      date: '2023-05-03',
      total: 300
    }
  ]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Flex
        bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
        minHeight="100vh"
        color={colorMode === 'light' ? 'gray.800' : 'white'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          w={{ base: '100%', md: '20%' }}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          borderRight={{ md: '1px solid' }}
          borderColor={{ md: colorMode === 'light' ? 'gray.200' : 'gray.700' }}
          p={4}
        >
          <IconButton
            display={{ base: 'inline-flex', md: 'none' }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            icon={<FaBars />}
            onClick={handleDrawerOpen}
            mb={2}
          />
          <Avatar
            name="Admin"
            src="https://bit.ly/dan-abramov"
            mb={4}
          />
          <Text fontWeight="bold" mb={2}>
            Admin
          </Text>
          
          
          <Stack spacing={2}>
          <Button variant="ghost" leftIcon={<RiDashboardLine />}><Link to='/Admin/Dashboard'>Dashboard</Link></Button>
      <Button variant="ghost" leftIcon={<RiCalendarLine />}><Link to='/Admin/Events'>Events</Link></Button>
      <Button variant="ghost" leftIcon={<RiUserLine />}><Link to='/Admin/Organizers'>Organizers</Link></Button>
      <Button variant="ghost" leftIcon={<RiFileListLine />}><Link to='/Admin/Requests'>Requests</Link></Button>
          </Stack>
        </Box>
        <Box w={{ base: '100%', md: '80%' }} p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading as="h1" size="lg">
              Dashboard
            </Heading>
            <Menu>
              <MenuButton as={IconButton} icon={<FaUser />} variant="ghost" />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Link to='/'><MenuItem>Logout</MenuItem></Link>
              </MenuList>
            </Menu>
          </Flex>
          <Box mb={8}>
            <Input placeholder="Search..." />
          </Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.customer}</Td>
                  <Td>{order.date}</Td>
                  <Td>{order.total}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Heading as="h2" size="md" mt={8} mb={4}>
            Customers
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={handleDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Stack spacing={2}>
              <Button variant="ghost">Dashboard</Button>
              <Button variant="ghost">Orders</Button>
              <Button variant="ghost">Customers</Button>
              <Button variant="ghost">Products</Button>
              <Button variant="ghost">Settings</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}