import React from "react";
import TableRow from './TableRow'

const TableBody = ({ details , status, getDetails}) => {
    
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {details.map((data,count) => (
        <tr key={data.id}>
        { status === 'all' ? <TableRow data={data} count={count} getDetails={getDetails} /> :
          (status === 'success' ? data.launch_success === true : 
            status === 'failed' ? data.launch_success === false : 
              data.launch_success === null ) &&  <TableRow data={data} count={count} getDetails={getDetails} />
        }
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;