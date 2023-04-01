import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataUserId } from "../../Redux/actions/userIdAction";

export const Tablet = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetId = (id) => {
    navigate(`/profile?id=${id}`);
    dispatch(setDataUserId(id));
  };

  return (
    <>
      <div className="p-3 bg-gray-100">
        <h1 className="text-xl mb-2">Task</h1>
        <div className=" rounded-sm shadow hidden md:block mx-auto w-10/12">
          <table className="table-fixed">
            <thead className="bg-slate-700 borde-b-2 borde-gray-200 text-white">
              <tr>
                <th className=" p-3 ms-2 text-sm font-semibold tracking-wide text-lef">
                  No.
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-lef">
                  Title
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-lef">
                  Description
                </th>
              </tr>
            </thead>
            {data &&
              data.map(({ userId, id, title, body }) => (
                <tbody className="divide-y divide-gray-100" key={id}>
                  <tr className="bg-white">
                    <td
                      className="p-2 w-1/8 text-center border text-blue-500 hover:text-blue-700 cursor-pointer"
                      onClick={() => handleGetId(userId)}
                    >
                      {userId}
                    </td>
                    <td className="p-2 w-2/8 text-center border">{title}</td>
                    <td className="p-2 w-5/8 text-center border">{body}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden">
          {data &&
            data.map(({ id, userId, title, body }) => (
              <div
                className="bg-white space-y-2 p-4 rounded-lg shadow"
                key={id}
              >
                <div className="flex items-center   text-sm">
                  <div className="flex">
                    <h1 className="font-bold">No.</h1>
                    <div className=" text-center text-gray-700 ">{userId}</div>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold">Title:</h1>
                  <div className="text-gray-500 text-justify">{title}</div>
                </div>
                <div>
                  <h1 className="font-bold">Description:</h1>
                  <div className="text-sm text-gray-700 text-justify">
                    {body}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
