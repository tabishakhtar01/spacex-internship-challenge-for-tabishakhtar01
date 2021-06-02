import React from 'react'
import Sat2 from '../../images/sat2.png'
import RowStatus from './RowStatus'
import Cols from './Cols'

const MODAL_STYLES = {
    position : 'fixed',
    top : '50%',
    left : '50%',
    transform : 'translate(-50%,-50%)',
    background : '#FFF',
    padding : '50px',
    zIndex : 1000,
}

const OVERLAY_STYLES = {
    position : 'fixed',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex : 1000
}

const LaunchDetails = ({ details, info, setIsSelected, sortDate }) =>
{
    return (
        <>
        <div style={OVERLAY_STYLES}/>
        <div className='lg:w-1/3 sm:w-4/5 md:w-3/4 w-full md:h-full h-5/6 rounded' style={MODAL_STYLES}>
            {details.map((data,index) => (
                info === index && 
                    <>
                        <div className='flex justify-around'>
                            <img className='md:w-1/4 w-14 h-14 md:h-auto' src={Sat2} alt='sat' />
                            <div>
                                <h4 className='md:text-2xl'>{data.mission_name}</h4>
                                <h4 className='mt-2'>{data.rocket.rocket_type}</h4>
                            </div>
                            <div>    
                                <RowStatus data = {data} />
                            </div>
                            <button className='fixed top-7 right-7 text-2xl' onClick={()=>setIsSelected(false)}>&times;</button>
                        </div>
                        <div>
                        {data.details ? 
                            <p className='m-5 text-sm w-full'>{data.details}<span className='text-blue-600 p-2' >Wikipedia</span></p>
                            : <p className='m-5'>No details as of now. We will update you soon...</p>}
                        </div>
                        <div className='grid grid-cols-1 divide-y divide-gray-500'>
                        <Cols>
                            <h3>Flight Number</h3>
                            <h3>{data.flight_number}</h3>
                        </Cols>
                        <Cols>
                            <h3>Mission Name</h3>
                            <h3>{data.mission_name}</h3>
                        </Cols>
                        <Cols>
                            <h3>Rocket Type</h3>
                            <h3>{data.rocket.rocket_type}</h3>
                        </Cols>
                        <Cols>
                            <h3>Manufacturer</h3>
                            <h3>{data.rocket.second_stage.payloads[0].manufacturer}</h3>
                        </Cols>
                        <Cols>
                            <h3>Nationality</h3>
                            <h3>{data.rocket.second_stage.payloads[0].nationality}</h3>
                        </Cols>
                        <Cols>
                            <h3>Launch Date</h3>
                            <h3>{sortDate(data.launch_date_utc)}</h3>
                        </Cols>
                        <Cols>
                            <h3>Payload Type</h3>
                            <h3>{data.rocket.second_stage.payloads[0].payload_type}</h3>
                        </Cols>
                        <Cols>
                            <h3>Orbit</h3>
                            <h3>{data.rocket.second_stage.payloads[0].orbit}</h3>
                        </Cols>
                        <Cols>
                            <h3>Site Name</h3>
                            <h3>{data.launch_site.site_name}</h3>
                        </Cols>
                    </div>
                    </>
                ))}
            
        </div>
        </>
    )
}

export default LaunchDetails