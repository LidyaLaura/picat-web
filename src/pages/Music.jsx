import { Box, Field, Image, Input, Slider, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useTheme } from '../context/theme-context';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

function Decoration() {
  const { isDarkMode } = useTheme();
  return <Box width={"3px"} height={"100%"} bgColor={isDarkMode ? "gray.400" : "gray.600"}></Box>
}

function Music() {
  const { isDarkMode } = useTheme();
  const [useTwoInput, setUseTwoInput] = useState(false);
  const [userInput, setUserInput] = useState({ title: "", description: "", threshold: 0.5 });
  const [apiResponseData, setApiResponseData] = useState(null);
  
  const truncateText = (text, maxLength) => {
    if (!text) return '-';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const handleTitleChange = (e) => {
    setUserInput(prev => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setUserInput(prev => ({ ...prev, description: e.target.value }));
  };

  const handleThresholdChange = (value) => {
    const sliderValueArray = value.value;
    const sliderValue = Array.isArray(sliderValueArray) ? sliderValueArray[0] : sliderValueArray;
    if (typeof sliderValue === 'number' && !isNaN(sliderValue)) {
      setUserInput(prev => ({ ...prev, threshold: sliderValue / 100 }));
    }
  };

  const handleSearch = async () => {
    if (userInput.title.trim() === "" && userInput.description.trim() === "") {
      toast.error("Minimal salah satu, Title atau Description, harus diisi.", {
        position: "bottom-center",
        theme: isDarkMode ? "light" : "dark",
      });
      return;
    }
    
    setApiResponseData(null);

    const toastId = toast.loading("Mencari kategori musik...", {
      position: "bottom-center",
      theme: isDarkMode ? "light" : "dark",
    });

    let searchData = useTwoInput
      ? { title: userInput.title, description: userInput.description, threshold: userInput.threshold }
      : { title: userInput.title, threshold: userInput.threshold };

    try {
      const API_URL = 'https://tohpati.pythonanywhere.com/predict/music'; 
      const response = await axios.post(API_URL, searchData);
      const apiResponse = response.data;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.dismiss(toastId);
      setApiResponseData(apiResponse);
    } catch (error) {
      const errorMessage = error.response?.data?.message || `Terjadi kesalahan pada server. Status: ${error.response?.status}`;
      toast.update(toastId, {
        render: `Gagal mencari: ${errorMessage}`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      setApiResponseData(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };
  
  return (
    <Box width={"100%"} minHeight={"100vh"} display={"flex"} flexDir={"column"}>
      <Navbar />
      <Box bgColor={isDarkMode ? "gray.900" : "gray.200"} zIndex={-1} top={1} marginTop={'-5px'} marginLeft={'-5px'} left={1} position={"absolute"} width={"100%"} height={"100%"}></Box>
      
      <Box width={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} padding={"10px"}>
        
        {/* Logo with fade-down */}
        <MotionImage
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          zoom={{base:"0.5", sm: "0.6", md: "0.7", xl: "1"}}  
          width={"370px"} 
          height={"150px"}
          className="no-drag" 
          src={`../assets/${isDarkMode ? 'dark' : 'light'}-logo-full.png`}
        />

        {/* Description with fade-in */}
        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          zoom={{base:"0.9", sm: "0.95", md: "0.98", xl: "1"}}
          padding={"5px"}
          color={isDarkMode ? "gray.300" : "gray.700"} 
          fontSize="lg" 
          textAlign="center" 
          mb="7px" 
          maxW="600px"
        >
          This web is a tool for predicting the genre of a Music based on the title or description you provide.
        </MotionText>

        {/* Input + Search area */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          zoom={{base:"0.85", sm: "0.8", md: "0.9", xl: "1"}}
          display={"flex"} 
          gap={"5px"} 
          flexDir={"column"} 
          width={"100%"} 
          maxWidth={"650px"}
        >
          {/* Input Bar */}
          <Box display={"flex"} gap={"5px"} >
            <Field.Root position={"relative"} height={"50px"} display={"flex"} flexDir={"row"} alignItems={"center"}>
              <Box 
                color={isDarkMode ? "gray.200" : "gray.800"} 
                bgColor={isDarkMode ? "gray.700" : "gray.300"} 
                className='no-drag'
                borderRadius={"25px 0 0 25px"} 
                display={"flex"} 
                justifyContent={"center"} 
                alignItems={"center"} 
                height={"100%"} 
                width={"200px"}
              >
                Music
              </Box>
              <Input 
                borderRadius={"0 25px 25px 0"} 
                color={isDarkMode ? "gray.200" : "gray.900"}
                bgColor={isDarkMode ? "gray.700" : "gray.300"}
                height={"100%"} 
                border={"none"}
                outline={"none"}
                placeholder={useTwoInput ? 'Input Title' : 'Input Title Or Lyrics'} 
                value={userInput.title}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
                _focus={{ boxShadow: isDarkMode ? "0 0 10px white" : "0 0 10px black" }}
              />
              <Image 
                cursor={"pointer"} 
                position={"absolute"} 
                right={2}
                width={"35px"} 
                height={"35px"} 
                src={`../assets/${isDarkMode ? 'light' : 'dark'}-search-icon.png`} 
                onClick={handleSearch}
              />
            </Field.Root>

            <Box 
              onClick={() => setUseTwoInput(!useTwoInput)} 
              cursor={"pointer"} 
              borderRadius={"50%"} 
              display={"flex"} 
              justifyContent={"center"} 
              alignItems={"center"} 
              bgColor={isDarkMode ? "gray.700" : "gray.300"} 
              width={"50px"} 
              height={"50px"} 
              fontSize={"40px"}
              whileHover={{ scale: 1.1 }}
              as={motion.div}
              className='no-drag'
            >
              <Text color={isDarkMode ? "gray.200" : "gray.700"}>{useTwoInput ? '-' : '+'}</Text>
            </Box>
          </Box>

          {/* Second input */}
          <AnimatePresence>
            {useTwoInput && (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Input 
                  borderRadius={"25px"} 
                  color={isDarkMode ? "gray.200" : "gray.900"}
                  bgColor={isDarkMode ? "gray.700" : "gray.300"}
                  height={"50px"} 
                  border={"none"}
                  outline={"none"}
                  paddingLeft={"20px"}
                  placeholder="Input Lyrics" 
                  value={userInput.description}
                  onChange={handleDescriptionChange}
                  onKeyDown={handleKeyDown}
                  _focus={{ boxShadow: isDarkMode ? "0 0 10px white" : "0 0 10px black" }}
                />
              </MotionBox>
            )}
          </AnimatePresence>

          {/* Slider animasi scale-in */}
          <MotionBox
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Slider.Root defaultValue={[50]} step={10} min={0} max={100} onValueChange={handleThresholdChange}>
              <Slider.Control>
                <Slider.Track position={"relative"} height={"14px"} bgColor={isDarkMode ? "gray.500" : "gray.500"}>
                  <Slider.Range bgColor={isDarkMode ? "gray.700" : "gray.800"}/>
                  <Box justifyContent={"space-between"} display={"flex"} width={"100%"} height={"100%"} position={"absolute"}> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> <Decoration/> </Box>
                </Slider.Track>
                <Slider.Thumbs />
              </Slider.Control>
            </Slider.Root>
          </MotionBox>
          <Text color={isDarkMode ? "gray.200" : "gray.800"}>{`Threshold: ${userInput.threshold.toFixed(1)}`}</Text>
        </MotionBox>

        {/* API Response animasi */}
        <AnimatePresence>
          {apiResponseData && (
            <MotionBox
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              zoom={{base:"0.85", sm: "0.8", md: "0.9", xl: "1"}} 
              bgColor={isDarkMode ? "gray.700" : "gray.300"} 
              borderRadius={"15px"} 
              maxWidth={"650px"} 
              width={"100%"}  
              height={"230px"} 
              padding={"10px"} 
              display={"flex"} 
              flexDir={"column"} 
              marginTop={"5px"}
            >
              <Box height={"70px"} display={"flex"} width={"100%"} justifyContent={"space-around"} alignItems={"center"}>
                <Box color={isDarkMode ? "gray.300" : "gray.800"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                  <Text fontSize={"22px"}>Title</Text>
                  <Text>{truncateText(apiResponseData.title, 20)}</Text>
                </Box>
                <Box color={isDarkMode ? "gray.300" : "gray.800"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                  <Text fontSize={"22px"}>Lyrics</Text>
                  <Text>{truncateText(apiResponseData.description, 50)}</Text>
                </Box>
              </Box>
              <Text color={isDarkMode ? "gray.300" : "gray.800"} textAlign={"center"} fontSize={"30px"}>Categories</Text>
              <Box 
                bgColor={isDarkMode ? "gray.300" : "gray.800"} 
                color={isDarkMode ? "gray.800" : "gray.300"} 
                minH={"50px"} 
                maxHeight={"100%"} 
                overflowY={"auto"} 
                borderRadius={"5px"} 
                display={"flex"} 
                flexDir={"column"} 
                alignItems={"center"}
              >
                <Text textAlign={"center"} fontSize={"25px"}>
                  {apiResponseData.predicted_genres?.join(', ') || 'Data tidak tersedia'}
                </Text>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default Music;
