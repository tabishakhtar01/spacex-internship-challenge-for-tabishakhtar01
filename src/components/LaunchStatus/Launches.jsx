import React, { useState } from 'react'
import Table from '../Table/Index'
import LaunchDetails from './LaunchDetails'
const Launches = ({ details, status, sortDate }) =>
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
            <Table details={details} status={status} getDetails={getDetails} sortDate={sortDate}/>
            {isSelected &&
            <LaunchDetails details={details} info={info} setIsSelected={setIsSelected} sortDate={sortDate}/>}
        </>
    )
}



export default Launches