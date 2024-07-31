import React,{useEffect, useState} from 'react'
import spinner from '../assets/spins.png';

const Spinner = () => {

    const [text,setText]=useState('');
    const [showImg,setShowImg]=useState(true);

    useEffect(()=>{
    setTimeout(()=>{
        setShowImg(false)
       setText(
        'Its taking time......'
       )
      },3000)
    },[])

  return (
    <div>
      {
        showImg ?(
            <img src={spinner} alt="Loading spinner"/>
        ):(
            <h3>{text}</h3>
        )
      }
    </div>
  )
}

export default Spinner;
