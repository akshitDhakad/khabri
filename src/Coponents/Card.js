import React from 'react'
import "./style.css"

function Card(props) {

  return (
    <div className="col-md-3 ">
        <div className="card h-md-250">
          <img className="card-img-top card-img" src={props.imgURl} alt="Image Not Found"/>
          <div className="card-body">
              <h5 className="card-title border-bottom pb-1 heading-title">{props.title.substring(0, 50)}<a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
              <p className="card-text heading-para">{props.des && (
  <p className="card-text heading-para">{props.des.substring(0, 100)} <a href={`${props.readmore}`} alt="details url">read more</a></p>
)}</p>
              
          </div>
        </div>
    </div>
  )
}

export default Card