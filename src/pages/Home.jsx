import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, SetSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault()
    handleSearch()
  }
  const handleSearch = () => {
    // Filter users based on the search term
    const filteredUsers = data.filter(
      (item) =>
      item?.title.toLowerCase().includes(search.toLowerCase()) ||
      item?.title.toLowerCase().includes(search.toLowerCase()) 
    );
    setData(filteredUsers);
  };
  if (error) {
    return <p>Some error Occured !</p>;
  }
console.log(data);
  if (loading) {
    return <p className="text-center text-2xl m-4"> Loading ........</p>;
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={search}
          placeholder="Search Item here ..."
          className="border w-full rounded p-3"
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
        />
        <button type="submit" className="p-3 bg-red-800 text-white">
          Search
        </button>
      </form>
      <div className="grid mt-2 sm:grid-cols-4 gap-4 justify-center px-4">
        {data?.length > 0 &&
          data.map((item, index) => {
            return <Card key={item.id} item={item} index={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
