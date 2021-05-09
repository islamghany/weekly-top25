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

const data = [
  {
    value: "dev",
    label: "Dev.to",
  },
  {
    value: "hr",
    label: "Hacker Rank",
  },
  {
    value: "lr",
    label: "Log Rocket",
  },
  {
    value: "dev",
    label: "Dev.to",
  },
];
const Hero = () => {
  return (
    <Box mt={4}>
      <Center>
        <Heading as="h1">Top 25 Articles</Heading>
      </Center>
      <Center w="100%">
        <VStack mt={5} maxW="600px" w="100%">
          <Text w="100%">Enter the tags</Text>
          <Input placeholder="javascript, node" />
          <Text w="100%">Choose blogs to fetch</Text>
          <Box w="100%" mb={5}>
            <Select
              defaultValue={[data[1]]}
              isMulti
              name="bolgs"
              options={data}
              className="basic-multi-select"
              classNamePrefix="select"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Button w="100%">Submit</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;
