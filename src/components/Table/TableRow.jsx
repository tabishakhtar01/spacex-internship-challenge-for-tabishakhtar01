import React from 'react'

const TableRow = ({data, count, getDetails}) =>
{
    return (
        <>
        {data ?
        <> 
        <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {count + 1}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.launch_date_utc}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.launch_site.site_name}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.mission_name}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.rocket.second_stage.payloads[0].orbit}
          </td>

            {(data.launch_success == null) ?           
            <td>  
            <p
            onClick={()=>getDetails(count)}  
            className="cursor-pointer text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-blue-300 hover:bg-blue-700 hover:text-white text-blue-700 font-bold w-1/2 text-center px-2 py-1 rounded-full"
            >
            Upcoming
            </p>
          </td>
           : data.launch_success ? 
           <td>  
            <p
            onClick={()=>getDetails(count)}  
            className="cursor-pointer text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-green-200 hover:bg-green-700 hover:text-white text-green-700 font-bold w-1/2 text-center px-2 py-1 rounded-full"
            >
            Success
            </p>
          </td>
           :           
           <td>  
            <p
            onClick={()=>getDetails(count)}  
            className="cursor-pointer text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-red-200 hover:bg-red-700 hover:text-white text-red-700 font-bold w-1/2 text-center px-2 py-1 rounded-full"
            >
            Failed
            </p>
          </td> }

          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.rocket.rocket_name}
          </td> 
          </>
          :  <> <h2>No results found for the specified filter</h2></>}
          
        </> 
    )
}

export default TableRow