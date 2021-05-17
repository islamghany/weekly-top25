import {
  Container,
  Center,
  Heading,
  Box,
  Input,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import Select from "react-select";
import {useRef,useState} from 'react';

const data = [
  {
    value: "https://dev.to/api/articles?per_page=25&top=7&tags=",
    label: "Dev.to",
  }
];
const Hero = ({handleSubmit}) => {
  const inputRef = useRef(null);
  const [selectedBlogs,setSelectedBlogs] = useState([data[0]]);
  return (
    <Box mt={4}>
      <Center>
        <Heading as="h1">Top 25 Articles</Heading>
      </Center>
      <Center w="100%">
        <VStack mt={5} maxW="600px" w="100%">
          <Text w="100%">Enter the tags</Text>
        <Input ref={inputRef} placeholder="javascript, node" />
          <Text w="100%">Choose blogs to fetch</Text>
          <Box w="100%" mb={5}>
            <Select
              defaultValue={[data[0]]}
              isMulti
              name="bolgs"
              options={data}
              onChange={(e)=>setSelectedBlogs(e)}
              className="basic-multi-select"
              classNamePrefix="select"
              styles={{
                control:  styles => ({ ...styles, backgroundColor: 'transparent' }),
                option:base=>({
                  ...base,
                  color:"#333",
                })
              }}
            />
          </Box>
          <Button w="100%" onClick={()=>handleSubmit(selectedBlogs,inputRef.current.value)}>Submit</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;
