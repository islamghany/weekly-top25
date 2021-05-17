import {useEffect} from 'react';
import axios from 'axios'

const fetchArtcales = async (url)=>{
  try{
    const res = await axios({
      method:'get',
      url,
    });
    return res.data;
  }catch(err){
    return null;
  }
}
const waitForAllArticales = async (urls)=>{
  return Promise.allSettled(urls.map(item=>fetchArtcales(item)));
}
const Articales = ({urls})=>{
  const fetchA=async ()=>{
     const res = await waitForAllArticales(urls);
     console.log(res);
  }
  useEffect(()=>{
    if(urls)
    fetchA();
  },[urls])
  return <div>
    heloo
  </div>
}

export default Articales;
