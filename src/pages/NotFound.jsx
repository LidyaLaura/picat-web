import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../context/theme-context';

function NotFound() {
   const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      width="100%"
      height="100vh"
      bgColor={isDarkMode ? "gray.900" : "gray.200"}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"

      gap={4}
    >
      {/* Kucing */}
      <Image
        width="150px"
        height="150px"
        src={isDarkMode ? "../assets/dark-cat.png" : "../assets/light-cat.png"}
        alt="Lost Cat"
        cursor="pointer"
        transition="transform 0.3s ease"
        _hover={{
          transform: "scale(1.2)",
        }}
        onClick={() => navigate("/home")}
      />

      {/* Text */}
      <Text color={isDarkMode ? "gray.300" : "gray.700"} fontSize="30px" fontWeight="bold">
        404 Page Not Found
      </Text>

      <Text color={isDarkMode ? "gray.400" : "gray.700"} fontSize="16px">
        Klik kucing untuk kembali ke beranda 🐾
      </Text>
    </Box>
  );
}

export default NotFound;
