import React, { useEffect, useState } from 'react';
import "./style.css";
import Card from './Card';
import { useLocation } from 'react-router-dom';

function Main() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [top, setTop] = useState("top-headlines");
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("business");
  const [searchBtn, setSearchBtn] = useState("meta");
  const [sortBy, setSortBy] = useState
  ("publishedAt");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterValue = queryParams.get('filter');
    const filterCountry = queryParams.get('country');
    if (filterCountry) {
      setCountry(filterCountry);
    }else if(filterValue){
      setCategory(filterValue)
    }

    fetchData();
  }, [location]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/${top}?q=${searchBtn}&country=${country}&category=${category}&sortBy=${sortBy}&apiKey=3d991f8190074398a14570847ee36dc3`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [top, country, category, sortBy,searchBtn]);

  return (
    <div className='container row'>
      {data &&
        data.articles &&
        data.articles.map((i, index) => (
          <Card
            key={index}
            title={i.title}
            imgURl={i.urlToImage}
            des={i.description}
            readmore={i.url}
          />
        ))}
    </div>
  );
}

export default Main;
