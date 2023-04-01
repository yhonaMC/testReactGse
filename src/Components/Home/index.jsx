import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../Filters/Filter";
import { useNavigate } from "react-router-dom";
import Dashboar from "../Dashboard/Index";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState(null);
  const [sortType, setSortType] = useState("asc");
  const navigate = useNavigate();

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

  useEffect(() => {
    // Filtro por usuario
    let tempPosts = users;
    if (userId) {
      tempPosts = tempPosts.filter((task) => task.userId === parseInt(userId));
    }

    // Búsqueda por título
    if (title) {
      tempPosts = tempPosts.filter((task) =>
        task.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    // Ordenamiento por título
    tempPosts.sort((a, b) =>
      sortType === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    setFilteredPosts(tempPosts);
  }, [userId, title, sortType, users]);

  const handleGetId = (id) => {
    navigate(`/profile?id=${id}`);
  };

  return (
    <>
      <div className="w-full">
        <Filter
          filteredPosts={filteredPosts}
          setFilteredPosts={setFilteredPosts}
          setUserId={setUserId}
          setTitle={setTitle}
          setSortType={setSortType}
          handleGetId={handleGetId}
        />
      </div>
    </>
  );
};
