import React from 'react'

const HeaderCols = ({children}) =>
{
    return (
        <>
        <th
            className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
            text-left text-bb-gray-600 text-opacity-50 bg-gray-300"
        >
            {children}
        </th>
        </>
    )
}

export default HeaderCols