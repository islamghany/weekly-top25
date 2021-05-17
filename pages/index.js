import Image from "next/image";
import Hero from "../components/hero";
import Articales from '../components/articales';
import {useState} from 'react'
export default function Home() {
  const [urls,setUrls] = useState(null)
  const handleSubmit = (data,value)=>{
    let tags = value.split(',').map(tag=>tag.replace(/\s/g, '')).join(', ');
    setUrls(data.map(item=>item.value+tags));
  }
  return (
    <div>
      <Hero handleSubmit={handleSubmit} />
    <Articales urls={urls} />
    </div>
  );
}
