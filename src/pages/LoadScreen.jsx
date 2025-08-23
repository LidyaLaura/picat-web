import { Box, Image } from '@chakra-ui/react';
import { useTheme } from '../context/theme-context';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionImage = motion(Image);

function LoadScreen() {
  const { isDarkMode } = useTheme();
  const [clicked, setClicked] = useState(false);

  return (
    <Box
      bgColor={isDarkMode ? "gray.900" : "gray.200"}
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <MotionImage
        width="160px"
        height="200px"
        src={`../assets/${isDarkMode ? 'dark' : 'light'}-logo-loadingscreen.png`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          clicked
            ? { scale: 20, opacity: 0 } // Zoom out ke fullscreen
            : {
                opacity: 1,
                scale: 1,
                filter: isDarkMode
                  ? "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3))"
                  : "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.2))",
              }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        cursor="pointer"
        whileHover={{
          scale: 1.1,
          rotate: [0, 5, -5, 0],
          filter: isDarkMode
            ? "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.6))"
            : "drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.4))",
          transition: { duration: 0.6, repeat: Infinity, repeatType: "mirror" },
        }}
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            window.location.href = '/home';
          }, 800); // sesuai durasi animasi
        }}
      />
    </Box>
  );
}

export default LoadScreen;
