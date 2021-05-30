import React, { useState } from 'react'
import Table from '../Table/Index'
import LaunchDetails from './LaunchDetails'
const Launches = ({ details, status }) =>
{ 
    const [isSelected,setIsSelected] = useState(false)
    const [info,setInfo] = useState()

    const getDetails = (id) =>
    {
        details.map((data,index)=>
        {
            if (id === index )
            {   
                setInfo(index)
                setIsSelected(true)
            }
            return data
        })
    }

    return (
        <>
            <Table details={details} status={status} getDetails={getDetails}/>
            {isSelected &&
            <LaunchDetails details={details} info={info} setIsSelected={setIsSelected}/>}
        </>
    )
}



export default Launches