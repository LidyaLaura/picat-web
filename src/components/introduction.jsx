import { Box } from '@chakra-ui/react';

function Introduction(props) {
    console.log("parameter kiriman: ", props.name);
  return (
    <Box marginTop={"20px"}>
      <h1>INTRODUCTION</h1>
      <p> halo nama saya: {props.name} </p>
    </Box>
  );
}

export default Introduction;
