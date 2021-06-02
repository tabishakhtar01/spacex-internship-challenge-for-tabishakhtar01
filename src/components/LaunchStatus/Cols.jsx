import React from 'react'

const Cols = ({children}) => 
{
    return (
        <>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                {children}
            </div>
        </>
    )
}

export default Cols