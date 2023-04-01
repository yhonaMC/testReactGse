import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tablet } from "../Tablet";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const getDataUser = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <div>
        <Tablet data={users} />
      </div>
    </>
  );
};
