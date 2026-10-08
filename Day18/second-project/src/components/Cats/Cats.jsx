import React from 'react'
import catsImage from '../../assets/WhatsApp Image 2026-09-21 at 20.41.44.jpeg'

export default function Cats() {
    return (
        <div className='container-fluid mx-auto'>
            <img src={catsImage} alt="cat Image" className='w-100'/>
        </div>
    )
}
