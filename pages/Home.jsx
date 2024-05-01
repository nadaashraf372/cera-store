import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
export default function Home() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=14",
        );
        if (!response.ok)
          throw new Error(`Failed to fetch data: Error ${response.status}`);
        const data = await response.json();
        console.log(data);
        setData(data);
        localStorage.setItem("data", JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);
  return (
    <div className="container">
      <Hero />
      <About />
      <Collections />
    </div>
  );
}
