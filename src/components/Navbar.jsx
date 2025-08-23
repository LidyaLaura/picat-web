import { Box, Image, Text } from "@chakra-ui/react";
import { useTheme } from '../context/theme-context';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation dan useNavigate

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Tentukan rute di mana tombol "back" tidak muncul
  const nonBackButtonRoutes = ['/', '/home']; // Contoh: home page

  // isCanBack akan bernilai true jika rute saat ini TIDAK ADA di dalam array
  const isCanBack = !nonBackButtonRoutes.includes(location.pathname);

  const handleBackClick = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <Box 
      zIndex={2} 
      width={"100%"} 
      height={"80px"} 
      bgColor={isDarkMode ? "gray.700" : "gray.300"} 
      display={"flex"} 
      alignItems={"center"} 
      justifyContent={"space-between"}
    >
      <Box 
        cursor={isCanBack ? "pointer" : "default"} // ubah kursor
        onClick={isCanBack ? handleBackClick : null} // tambahkan event handler
        width={"150px"} 
        height={"100%"} 
        display={"flex"} 
        justifyContent={"center"} 
        alignItems={"center"}
      >
        {isCanBack ? (
          <Image width={"40px"} height={"40px"} src={isDarkMode ? "/assets/light-left-arrow.png" : "/assets/dark-left-arrow.png"}></Image>
        ) : (
          <Box width={"40px"} height={"40px"}></Box>
        )}
        
        <Text color={isDarkMode ? "white" : "black"} fontSize={"53px"}>PiCat</Text>
      </Box>

      {/* Konten toggle mode gelap */}
      <Box
        width={"140px"}
        height={"50px"}
        onClick={toggleDarkMode}
        bgColor={isDarkMode ? "black" : "white"}
        border={"2px solid"}
        borderColor={"gray.400"}
        cursor={"pointer"}
        marginRight={"20px"}
        borderRadius={"25px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-between"
        position="relative"
        padding="5px"
        className="no-drag"
      >
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          zIndex={1}
          opacity={isDarkMode ? 0.4 : 1}
          transition="opacity 0.3s ease-in-out"
        >
          <Image src="/assets/sun.png" boxSize="34px" marginLeft={"6px"} />
        </Box>

        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          zIndex={1}
          opacity={isDarkMode ? 1 : 0.4}
          transition="opacity 0.3s ease-in-out"
          
        >
          <Image src="/assets/moon.png" boxSize="40px" marginRight={"10px"} />
        </Box>
        
        <Box 
          height={"40px"} 
          width={"40px"} 
          bgColor={isDarkMode ? "gray.600" : "gray.300"} 
          borderRadius={"50%"} 
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"center"}
          position="absolute"
          top="50%"
          left={isDarkMode ? "85px" : "5px"}
          transform="translateY(-50%)"
          transition="left 0.3s ease-in-out"
          zIndex={2}
        >
          <Box 
            height={"20px"} 
            width={"20px"} 
            bgColor={isDarkMode ? "black" : "white"} 
            borderRadius={"50%"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;