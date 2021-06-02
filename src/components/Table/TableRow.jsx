import React from 'react'
import RowStatus from '../LaunchStatus/RowStatus'
import Cols from './Column/TableCols'

const TableRow = ({ data, sortDate }) =>
{
    return (
        <>
        {data ?
        <>
          <Cols>
            {data.flight_number}
          </Cols>
          <Cols>
            {sortDate(data.launch_date_utc)}
          </Cols>
          <Cols>
            {data.launch_site.site_name}
          </Cols>
          <Cols>
            {data.mission_name}
          </Cols>
          <Cols>
            {data.rocket.second_stage.payloads[0].orbit}
          </Cols>
          <Cols>
            <RowStatus data={data} />
          </Cols>
          <Cols>
            {data.rocket.rocket_name}
          </Cols>
          </>
          :  <> <h2>No results found for the specified filter</h2></>}
          
        </> 
    )
}

export default TableRow