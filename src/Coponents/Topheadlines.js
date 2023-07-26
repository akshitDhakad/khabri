import React, { useEffect, useState } from 'react';
import "./style.css";

function Topheadlines() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY

   
    async function fetchData() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${apiKey}`);
        const data = await response.json();
        setData(data.sources);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set an empty array in case of an error to prevent infinite loading
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // Move to the next news item after 10 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);

      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }
  }, [currentIndex, data]);

  if (data.length === 0) {
    return (
      <div className="spinner-border text-black" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ); // Show a loading message while fetching data
  }

  const currentNews = data?.[currentIndex];
  
  if (!currentNews) {
    return <div>No news available.</div>;
  }

  return (
    <div>
      <div className='row container heading'>
        <div className="col-md-8">
          {/* Render the currentNews details here */}
          <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">Breaking News</strong>
              <h6 className="mb-0">
                <a className="text-dark " href={`${currentNews.url}`}>
                  {currentNews.description.substring(0, 100)}....
                </a>
              </h6>
              <div className="mb-1 text-muted small">12Jan</div>
            
              <a className="btn btn-outline-primary btn-sm" role="button" href={`${currentNews.url}`}>Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" style={{ width: "200px", height: "250px" }} />
          </div>
        </div>
        {/* Render other news items */}
        <div className="col-md-4">
          <div className="card h-md-250">
            <img className="card-img-top" src="https://ichef.bbci.co.uk/news/320/cpsprodpb/D879/production/_130271455_mediaitem130271454.jpg" alt="cardimage" />
            <div className="card-body">
              <h5 className="card-title border-bottom pb-3 heading-title">Breaking News <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
              <p className="card-text heading-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href={`${currentNews.url}`} className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheadlines;


//  old code ****************************************************************************************
// import React, { useEffect, useState } from 'react';
// import "./style.css";

// function Topheadlines() {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentDate, setCurrentDate] = useState(""); // State to hold the current date
//   const [dynamicImageUrl, setDynamicImageUrl] = useState("https://source.unsplash.com/1200x960/?news,breaking news"); // Set the initial image URL

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=3d991f8190074398a14570847ee36dc3");
//       const data = await response.json();
//       setData(data.sources);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Move to the next news item after 10 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, [currentIndex, data.length]);

//   useEffect(() => {
//     // Update the current date every second
//     const interval = setInterval(() => {
//       const today = new Date();
//       const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`; // Format: DDMMYYYY
//       setCurrentDate(formattedDate);
//     }, 1000);

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, []);

//   useEffect(() => {
//     // Refresh the dynamic image URL every 3 seconds
//     const imageInterval = setInterval(() => {
//       setDynamicImageUrl(`https://source.unsplash.com/1200x960/?news,breaking news&_=${Date.now()}`);
//     }, 3000);

//     return () => {
//       clearInterval(imageInterval); // Cleanup the interval on component unmount
//     };
//   }, []);

//   if (data.length === 0) {
//     return (
//       <div className="spinner-border text-black" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     ); // Show a loading message while fetching data
//   }

//   const currentNews = data[currentIndex];

//   return (
//     <div>
//       <div className='row container heading'>
//         <div className="col-md-8">
//           {/* Render the currentNews details here */}
//           <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
//             <div className="card-body d-flex flex-column align-items-start">
//               <strong className="d-inline-block mb-2 text-primary">Breaking News</strong>
//               <h6 className="mb-0">
//                 <a className="text-dark " href={`${currentNews.url}`}>
//                   {currentNews.description.substring(0, 100)}....
//                 </a>
//               </h6>
//               <div className="mb-1 text-muted small">{currentDate}</div> {/* Display the current date */}
//               <a className="btn btn-outline-primary btn-sm" role="button" href={`${currentNews.url}`}>Continue reading</a>
//             </div>
//             <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png"style={{ width: "200px", height: "250px" }} /> {/* Use the dynamic image URL */}
//           </div>
//         </div>
//         {/* Render other news items */}
//         <div className="col-md-4">
//           <div className="card h-md-250">
//             <img className="card-img-top" src={dynamicImageUrl}  alt="cardimage" />
//             <div className="card-body">
//               <h5 className="card-title border-bottom pb-3 heading-title">Breaking News <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
//               <p className="card-text heading-para">{currentNews.description.substring(0, 100)}....</p>
//               <a href={`${currentNews.url}`} className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topheadlines;







// old code 

// import React, { useEffect, useState } from 'react';
// import "./style.css";

// function Topheadlines() {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentDate, setCurrentDate] = useState(""); // State to hold the current date

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=3d991f8190074398a14570847ee36dc3");
//       const data = await response.json();
//       setData(data.sources);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Move to the next news item after 10 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, [currentIndex, data.length]);

//   useEffect(() => {
//     // Update the current date every second
//     const interval = setInterval(() => {
//       const today = new Date();
//       const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`; // Format: DDMMYYYY
//       setCurrentDate(formattedDate);
//     }, 1000);

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, []);

//   if (data.length === 0) {
//     return (
//       <div className="spinner-border text-black" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     ); // Show a loading message while fetching data
//   }

//   const currentNews = data[currentIndex];

//   return (
//     <div>
//       <div className='row container heading'>
//         <div className="col-md-8">
//           {/* Render the currentNews details here */}
//           <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
//             <div className="card-body d-flex flex-column align-items-start">
//               <strong className="d-inline-block mb-2 text-primary">Breaking News</strong>
//               <h6 className="mb-0">
//                 <a className="text-dark " href={`${currentNews.url}`}>
//                   {currentNews.description.substring(0, 100)}....
//                 </a>
//               </h6>
//               <div className="mb-1 text-muted small">{currentDate}</div> {/* Display the current date */}
//               <a className="btn btn-outline-primary btn-sm" role="button" href={`${currentNews.url}`}>Continue reading</a>
//             </div>
//             <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" style={{ width: "200px", height: "250px" }} />
//           </div>
//         </div>
//         {/* Render other news items */}
//         <div className="col-md-4">
//           <div className="card h-md-250">
//             <img className="card-img-top" src="https://source.unsplash.com/1200x960/?news,breaking news" alt="cardimage" />
//             <div className="card-body">
//               <h5 className="card-title border-bottom pb-3 heading-title">Breaking News <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
//               <p className="card-text heading-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href={`${currentNews.url}`} className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topheadlines;


// old code*********************************

// import React, { useEffect, useState } from 'react';
// import "./style.css";

// function Topheadlines() {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=3d991f8190074398a14570847ee36dc3");
//       const data = await response.json();
//       setData(data.sources);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Move to the next news item after 10 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, [currentIndex, data.length]);

//   if (data.length === 0) {
//     return <div className="spinner-border  text-black" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>; // Show a loading message while fetching data
//   }

//   const currentNews = data[currentIndex];
  
  
//   console.log(data)
//   return (
//     <div>
//       <div className='row container heading'>
//         <div className="col-md-8">
//           {/* Render the currentNews details here */}
//           <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
//             <div className="card-body d-flex flex-column align-items-start">
//               <strong className="d-inline-block mb-2 text-primary">Breaking News</strong>
//               <h6 className="mb-0">
//                 <a className="text-dark " href={`${currentNews.url}`}>
//                      {currentNews.description.substring(0, 100)}....
//                 </a>
//               </h6>
//               <div className="mb-1 text-muted small">12Jan</div>
            
//               <a className="btn btn-outline-primary btn-sm" role="button" href={`${currentNews.url}`}>Continue reading</a>
//             </div>
//             <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" style={{ width: "200px", height: "250px" }} />
//           </div>
//         </div>
//         {/* Render other news items */}
//         <div className="col-md-4">
//           <div className="card h-md-250">
//             <img className="card-img-top" src="https://ichef.bbci.co.uk/news/320/cpsprodpb/D879/production/_130271455_mediaitem130271454.jpg" alt="cardimage" />
//             <div className="card-body">
//               <h5 className="card-title border-bottom pb-3 heading-title">Breaking News <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
//               <p className="card-text heading-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href={`${currentNews.url}`} className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topheadlines;















// ****************************old code *************************************

// import React, { useEffect, useState } from 'react'
// import  "./style.css"


// function Topheadlines() {

//    const [data,setData] = useState([])

//    useEffect(()=>{
//       async function fetchData() {
//          const response = await fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=3d991f8190074398a14570847ee36dc3")
//          const data = await response.json()
//          setData(data.sources)
//        }
//        fetchData();
       

//    },[])

//    console.log(data)

//    // fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=3d991f8190074398a14570847ee36dc3")
//   return (
//     <div>
//     <div className='row container heading'>
    
//     <div className="col-md-8">
//          <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
//             <div className="card-body d-flex flex-column align-items-start">
//                <strong className="d-inline-block mb-2 text-primary">World</strong>
//                <h6 className="mb-0">
//                   <a className="text-dark " href="/">40 Percent of People Can’t affort  basic need .</a>
//                </h6>
//                <div className="mb-1 text-muted small">Nov 12</div>
//                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//                <a className="btn btn-outline-primary btn-sm" role="button" href="/">Continue reading</a>
//             </div>
//             <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/01/8d4b1f072e90db1a0988686d838139061669917672190375_original.jpg?impolicy=abp_cdn&imwidth=400" style={{width: "200px",height: "250px"}}/>
//          </div>
//       </div>
//       <div className="col-md-4">
//          <div className="card h-md-250">
//             <img className="card-img-top" src="https://ichef.bbci.co.uk/news/320/cpsprodpb/D879/production/_130271455_mediaitem130271454.jpg" alt="cardimage"/>
//             <div className="card-body">
//                <h5 className="card-title border-bottom pb-3 heading-title">Card title <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
//                <p className="card-text heading-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                <a href="/" className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
//             </div>
//          </div>
//       </div>



//     </div>
     
//     </div>
//   )
// }

// export default Topheadlines