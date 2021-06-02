import React from 'react'

const RowStatus = ({data}) =>
{
    return (
        <>
        {(data.launch_success == null) ?           
        <p  
            className="text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-yellow-200 hover:bg-yellow-600 hover:text-white text-yellow-600 font-bold w-full text-center px-2 py-1 rounded-full"
            >
            Upcoming
            </p>

            : data.launch_success ? 
            <p 
            className="text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-green-200 hover:bg-green-700 hover:text-white text-green-700 font-bold w-full text-center px-2 py-1 rounded-full"
            >
            Success
            </p>
            :           

            <p  
            className="text-sm font-medium
            leading-5 whitespace-no-wrap
            bg-red-200 hover:bg-red-700 hover:text-white text-red-700 font-bold w-full text-center px-2 py-1 rounded-full"
            >
            Failed
        </p>}
        </>
    )
}

export default RowStatus