import React from "react";
import TableRow from './TableRow'

const TableBody = ({ details , status, getDetails, sortDate}) => {

  return (
    <tbody className="bg-white divide-y divide-gray-300">
      {details.map((data,count) => (
        <tr key={data.id}
            onClick={()=>getDetails(count)}
            className='cursor-pointer hover:bg-gray-200'>
        { status === 'all' ? <TableRow data={data} count={count} getDetails={getDetails} sortDate={sortDate}/> :
          (status === 'success' ? data.launch_success === true : 
            status === 'failed' ? data.launch_success === false : 
              data.launch_success === null ) &&  <TableRow data={data} count={count} getDetails={getDetails} sortDate={sortDate} />
        }
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;