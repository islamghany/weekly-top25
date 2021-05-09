import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import Hero from "../components/hero";
import { useEffect } from "react";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    toggleColorMode("light");
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
}
