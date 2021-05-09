import Image from "next/image";
import Hero from "../components/hero";
export default function Home() {
  const handleSubmit = (data,value)=>{
    console.log(data,value)
  }
  return (
    <div>
      <Hero handleSubmit={handleSubmit} />
    </div>
  );
}
