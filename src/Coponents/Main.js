import React, { useEffect, useState } from 'react';
import "./style.css";
import Card from './Card';
import { useParams } from 'react-router-dom';

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();


  // query handler  ***************************
  const urlString = window.location.href;
  const parsedUrl = new URL(urlString);
  const country = parsedUrl.searchParams.get('country');
  
  // query handler  ***************************

  const filter = parsedUrl.searchParams.get('category');


  useEffect(() => {

//  Api  handler  **************************************

// https://newsapi.org/v2/top-headlines?category=business&apiKey=3d991f8190074398a14570847ee36dc3
    const fetchData = async () => {
      try {
        let apiURL;
        if (category === "top-headlines") {
          if(country){
            apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&apiKey=3d991f8190074398a14570847ee36dc3`;

          }
          else{
            apiURL = `https://newsapi.org/v2/top-headlines?category=${filter}&language=en&apiKey=3d991f8190074398a14570847ee36dc3`;

          }
          
        } else {
          apiURL = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3d991f8190074398a14570847ee36dc3";
        }

        const response = await fetch(apiURL);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category,country,filter]);

  if (loading) {
    return <div class="spinner-border  text-black" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>}

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










// old code *****************************************************************

// import React, { useEffect, useState } from 'react';
// import "./style.css";
// import Card from './Card';
// import {useParams } from 'react-router-dom';

// function Main() {
//   const [data, setData] = useState(null);


//   const { category } = useParams();
//   console.log(category)

//   // topheading section handler ***********************************

//   useEffect(()=>{
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=3d991f8190074398a14570847ee36dc3`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData()

//   },[])


//   // Everthing section handler ***********************************

//   useEffect(()=>{
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3d991f8190074398a14570847ee36dc3`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData()

//   },[])


//   return (
//     <div className='container row'>
//       {data &&
//         data.articles &&
//         data.articles.map((i, index) => (
//           <Card
//             key={index}
//             title={i.title}
//             imgURl={i.urlToImage}
//             des={i.description}
//             readmore={i.url}
//           />
//         ))}
//     </div>
//   );
// }

// export default Main;
