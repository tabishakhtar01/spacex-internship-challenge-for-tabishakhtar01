import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from './Container'
import NavBar from './NavBar/NavBar'
import Launches from './LaunchStatus/Launches'
import PageLoader from './PageLoader/Loader'
import Pagination from './Pagination'

const Dashboard = () =>
{   
    const [details,setDetails] = useState([])
    const [page,setPage] = useState('all')
    const [loading,setLoading] = useState(true)

    const [currentPage,setCurrentPage] = useState(1)
    const [launchPerPage] = useState(9)

    const fetchDetails = async () =>
    {
        const response = await axios.get('https://api.spacexdata.com/v3/launches')
        setDetails(response.data)
        setLoading(false)
    }

    const sortDate = (date) =>
    {
        const months = [
            "January", "February", 
            "March", "April", "May", 
            "June", "July", "August",
            "September", "October", 
            "November", "December"
        ];
        const month = parseInt(date.slice(5,7)) - 1
        const year = date.slice(0,4)
        const day = date.slice(8,10)
        const time = date.slice(11,16)
        return (`${day} ${months[month]} ${year} at ${time}`)
    }

    const navigateTo = (nextPage) =>
    {
        setPage(nextPage);
        setLoading(false)
    }
   
    useEffect(()=>
    {
        fetchDetails()
    },[])

    const indexOfLastLaunch = currentPage * launchPerPage;
    const indexOfFirstLaunch = indexOfLastLaunch - launchPerPage;
    const currentlaunch = details.slice(indexOfFirstLaunch, indexOfLastLaunch)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if(loading)
    {
        return <PageLoader />
    }

    return (<>
        <NavBar />
        <div className='flex justify-end container-fluid md:container mt-10'>
            <div className="inline-flex relative">
                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 412 232">
                <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 
                    25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 
                    9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" 
                    fill="#648299" 
                    fill-rule="nonzero"/>
                </svg>

                <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 
                    bg-white hover:border-gray-400 focus:outline-none appearance-none"
                    onChange={(e)=>navigateTo(e.target.value)}>
                    <option value='all'>All Launches</option>
                    <option value='success'>Success Launches</option>
                    <option value='upcoming'>Upcoming Launches</option>
                    <option value='failed'>Failed Launches</option>
                </select>
            </div>
        </div>
            
            {page === 'all' && <><Container> <Launches details={currentlaunch} status='all' sortDate={sortDate}/></Container>
                <Pagination launchPerPage={launchPerPage} totalLaunch={details.length} paginate={paginate} /></>}
            {page === 'success' && <><Container><Launches details={currentlaunch} status='success' sortDate={sortDate}/></Container>
                <Pagination launchPerPage={launchPerPage} totalLaunch={details.length} paginate={paginate} /></>}
            {page === 'failed' && <Container><Launches details={details} status='failed' sortDate={sortDate}/></Container>}
            {page === 'upcoming' && <Container><Launches details={details} status='upcoming' sortDate={sortDate}/></Container>}
        </>)


}

export default Dashboard