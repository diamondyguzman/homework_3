import React from 'react';

export default function HomePage(){
  return(
    <>
      <h1>My name :{process.env.NEXT_PUBLIC_MY_NAME}</h1>
   
    </>
  )
}