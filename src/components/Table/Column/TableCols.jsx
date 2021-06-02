import React from 'react'

const TableCols = ({children}) =>
{
    return (
        <>
            <td
                className="px-6 py-4 text-sm font-medium
                leading-5 text-bb-gray whitespace-no-wrap"
            >
                {children}
            </td>
        </>
    )
}

export default TableCols