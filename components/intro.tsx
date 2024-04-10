import React from 'react';
import Image from "next/image";

export default function Intro() {
  return (
   <section>
    <div className='flex justify-center items-center'>
        <div>
            <Image src= "/public/OwnPic.png" alt="ownPic" width="192" height="192" quality={95} priority={true}/>
        </div>
    </div>
   </section>
  )
}
