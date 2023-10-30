import React, {useState, useEffect} from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Banner from '../banner/Banner'


export default function Home() {
  
  useEffect(() => {
    document.title = 'Bazar Tech';
  }, []);

  return (
    <>
    <Banner/>
    </>  
  )
}
