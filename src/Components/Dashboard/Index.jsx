import React, { useEffect, useState } from "react";
import axios from "axios";
import { Charts } from "../Charts";

const Dashboar = () => {
  const [totalTasks, setTotalTasks] = useState(0);
  const [dataChart, setDataChart] = useState([]);
  const [companyResponsibles, setCompanyResponsibles] = useState([]);
  const [loading, setLoading] = useState(true);

  const DataTask = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTotalTasks(data.length);
      setDataChart(data);
      const companyResponsiblesMap = {};
      data.forEach((task) => {
        if (companyResponsiblesMap[task.userId]) {
          companyResponsiblesMap[task.userId]++;
        } else {
          companyResponsiblesMap[task.userId] = 1;
        }
      });
      setCompanyResponsibles(companyResponsiblesMap);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    DataTask();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-lg font-bold mb-2">Total de tareas</p>
            <p className="text-gray-700">{totalTasks}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-lg font-bold mb-2">Responsables por empresa</p>
            <ul className="list-disc pl-6">
              {Object.entries(companyResponsibles).map(([userId, count]) => (
                <li key={userId}>
                  Empresa {userId}: {count} responsables
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-lg font-bold mb-2">Diagrama</p>
            <p className="text-gray-700">
              <Charts dataChart={dataChart} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboar;
