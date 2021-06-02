import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ details , status, getDetails, sortDate }) => {
  return (
    <div className="flex flex-col mt-5 ">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 rounded shadow-2xl md:custom-box-shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader />
              <TableBody details={details} status={status} getDetails={getDetails} sortDate={sortDate}/>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;