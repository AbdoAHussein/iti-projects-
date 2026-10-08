import React from 'react'
import dogImage from '../../assets/images.jpeg'

export default function Dogs() {
    return (
        <div className='container-fluid mx-auto'>
            <img src={dogImage} alt="dog Image" className='w-100'/>
        </div>
    )
}
