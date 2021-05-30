import React from 'react'
import Rocket from '../../images/Rocket.gif'

const Loader = () =>
{
    return (
    <>
    <div className='flex justify-center items-center text-center h-screen'>
        <img src={Rocket} alt='Rocket'/>
    </div>
    </>
    )
}

export default Loader