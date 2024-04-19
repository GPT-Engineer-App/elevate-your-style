import { Box, Button, Container, Flex, Grid, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaPinterest, FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Elevate Your Style
          </Heading>
          <Flex alignItems="center">
            <Button leftIcon={<FaShoppingCart />} mr={2}>
              Cart
            </Button>
            <Button leftIcon={<FaUserAlt />}>Login</Button>
          </Flex>
        </Flex>
      </Box>

      <Image src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MHx8fHwxNzEzNTI2MjExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fashion Boutique" />

      <Box as="main" py={8}>
        <Heading as="h2" size="md" mb={4}>
          Featured Collections
        </Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjb2xsZWN0aW9uJTIwZmFzaGlvbnxlbnwwfHx8fDE3MTM1MjYyMTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Summer Collection" />
            <Text mt={2}>Summer Collection</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb2xsZWN0aW9uJTIwZmFzaGlvbnxlbnwwfHx8fDE3MTM1MjYyMTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Winter Collection" />
            <Text mt={2}>Winter Collection</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBjb2xsZWN0aW9uJTIwZmFzaGlvbnxlbnwwfHx8fDE3MTM1MjYyMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Exclusive Collection" />
            <Text mt={2}>Exclusive Collection</Text>
          </Box>
        </SimpleGrid>

        <Heading as="h3" size="md" mt={8} mb={4}>
          Shop by Category
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Button variant="outline">Clothing</Button>
          <Button variant="outline">Footwear</Button>
          <Button variant="outline">Accessories</Button>
          <Button variant="outline">Beauty Products</Button>
        </Grid>

        <Heading as="h3" size="md" mt={8} mb={4}>
          Our Blog
        </Heading>
        <VStack spacing={4} align="stretch">
          <Link href="#" isExternal>
            <Text fontSize="lg">Fashion Tips for the Season</Text>
          </Link>
          <Link href="#" isExternal>
            <Text fontSize="lg">How to Choose Your Style</Text>
          </Link>
        </VStack>
      </Box>

      <Box as="footer" py={8}>
        <SimpleGrid columns={3} spacing={10}>
          <Box>
            <Heading size="sm">Follow Us</Heading>
            <Flex mt={2}>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram />
              </Link>
              <Link href="https://facebook.com" isExternal ml={2}>
                <FaFacebook />
              </Link>
              <Link href="https://pinterest.com" isExternal ml={2}>
                <FaPinterest />
              </Link>
            </Flex>
          </Box>
          <Box>
            <Heading size="sm">Quick Links</Heading>
            <VStack align="start" mt={2}>
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliate Program</Link>
              <Link href="#">Store Locator</Link>
            </VStack>
          </Box>
          <Box>
            <Heading size="sm">Contact Us</Heading>
            <Text mt={2}>Email: support@fashionstore.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
