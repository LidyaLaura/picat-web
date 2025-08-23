import { Box, Image, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/theme-context';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

function Card({ title, url, isDarkMode }) {
  return (
    <MotionBox
      bgColor={isDarkMode ? "gray.600" : "gray.300"}
      onClick={() => window.location = url}
      cursor={'pointer'}
      width={"300px"}
      height={"500px"}
      borderRadius={"10px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      whileHover={{
        scale: 1.05,
        boxShadow: isDarkMode
          ? "0px 0px 20px rgba(255, 255, 255, 0.4)"
          : "0px 0px 20px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Text color={isDarkMode ? 'white' : 'black'} fontSize={"35px"}>
        {title}
      </Text>
    </MotionBox>
  );
}

function Home() {
  const { isDarkMode } = useTheme();
  const catImageSrc = isDarkMode ? '../assets/dark-cat.png' : '../assets/light-cat.png';

  return (
    <Box
      width={"100%"}
      minHeight={"100vh"}
      height={"100%"}
      display={"flex"}
      flexDir={"column"}
    >
      <Navbar />

      {/* Background fade-in */}
      <MotionBox
        bgColor={isDarkMode ? "gray.900" : "gray.200"}
        zIndex={-1}
        top={1}
        marginTop={'-5px'}
        marginLeft={'-5px'}
        left={1}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Cat Top */}
      <MotionImage
        marginTop={"-80px"}
        marginLeft={"-50px"}
        rotate="155deg"
        zIndex={-1}
        position={"absolute"}
        top={1}
        left={1}
        width={"350px"}
        height={"350px"}
        src={catImageSrc}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cards Section */}
      <Box
        zoom={{ base: "0.8", sm: "0.85", md: "0.9", xl: "1" }}
        display={"flex"}
        flexWrap={"wrap"}
        minHeight={"550px"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"row"}
      >
        <Card title={"Movies"} url={'/movie'} isDarkMode={isDarkMode} />
        <Card title={"Music"} url={'/music'} isDarkMode={isDarkMode} />
        <Card title={"Books"} url={'/book'} isDarkMode={isDarkMode} />
      </Box>

      {/* Floating Cat Bottom */}
      <MotionImage
        zIndex={-1}
        position={"absolute"}
        bottom={1}
        right={1}
        width={"400px"}
        height={"400px"}
        src={catImageSrc}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </Box>
  );
}

export default Home;
