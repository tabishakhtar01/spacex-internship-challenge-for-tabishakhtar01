import React from 'react'


const Pagination = ({ launchPerPage, totalLaunch, paginate}) =>
{   
    const pageNumbers = []
    for(let index = 1; index<=Math.ceil(totalLaunch / launchPerPage); index++){
        pageNumbers.push(index)
    }
    return (
        <nav>
            <ul className='flex container justify-end mt-5'>
                {pageNumbers.map(number => (
                    <li>
                        <button onClick={()=>paginate(number)} className='border active:bg-blue-500 border-blue-500 text-blue-500 
                            rounded hover:bg-blue-500 hover:text-white p-2 cursor-pointer' key={number}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>

    )

    

}

export default Pagination