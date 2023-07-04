import React, { useEffect, useState } from 'react';
import "./style.css";
import Card from './Card';

function Main() {
  const [data, setData] = useState(null);
  const [top,setTop] = useState("everything");
  const [country,setCountry] = useState("in")

  useEffect(() => {
    async function fetchData() {
      
      try {
        const response = await fetch(`https://newsapi.org/v2/${top}?country=${country}&apiKey=3d991f8190074398a14570847ee36dc3`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [top,country]);

  return (
    <div className='container row'>
      {data && data.articles && data.articles.map((i, index) =>
        <Card key={index} title={i.title} imgURl={i.urlToImage} des={i.description} readmore={i.url} />
      )}
    </div>
  );
}

// https://newsapi.org/v2/everything?apiKey=3d991f8190074398a14570847ee36dc3
// api key =3d991f8190074398a14570847ee36dc3
export default Main;
