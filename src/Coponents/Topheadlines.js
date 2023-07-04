import React from 'react'
import  "./style.css"


function Topheadlines() {
  return (
    <div>
    <div className='row container heading'>
    
    <div className="col-md-8">
         <div className="card flex-md-row mb-4 shadow-sm h-md-250 big-card">
            <div className="card-body d-flex flex-column align-items-start">
               <strong className="d-inline-block mb-2 text-primary">World</strong>
               <h6 className="mb-0">
                  <a className="text-dark " href="/">40 Percent of People Can’t affort  basic need .</a>
               </h6>
               <div className="mb-1 text-muted small">Nov 12</div>
               <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
               <a className="btn btn-outline-primary btn-sm" role="button" href="/">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/01/8d4b1f072e90db1a0988686d838139061669917672190375_original.jpg?impolicy=abp_cdn&imwidth=400" style={{width: "200px",height: "250px"}}/>
         </div>
      </div>
      <div className="col-md-4">
         <div className="card h-md-250">
            <img className="card-img-top" src="https://ichef.bbci.co.uk/news/320/cpsprodpb/D879/production/_130271455_mediaitem130271454.jpg" alt="cardimage"/>
            <div className="card-body">
               <h5 className="card-title border-bottom pb-3 heading-title">Card title <a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
               <p className="card-text heading-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="/" className="float-right">Read more <i className="fas fa-angle-double-right"></i></a>
            </div>
         </div>
      </div>



    </div>
     
    </div>
  )
}

export default Topheadlines