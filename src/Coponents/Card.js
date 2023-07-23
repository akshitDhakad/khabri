import React from 'react'
import "./style.css"
// https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png
function Card(props) {

  return (
    <div className="col-md-3 ">
        <div className="card h-md-250">{
          props.imgURl?<img className="card-img-top card-img" src={props.imgURl} alt="imagenotfound"/>:<img className="card-img-top card-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" alt="imagenotfound"/>
        }
          
          <div className="card-body">
              <h5 className="card-title border-bottom pb-1 heading-title">{props.title.substring(0, 50)}<a href="/" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
              <sapn className="card-text heading-para">{props.des && (
                  <p className="card-text heading-para">{props.des.substring(0, 100)} <a href={`${props.readmore}`} alt="details url"><span className='readmore'>read more</span></a></p>
                )}</sapn>
              
          </div>
        </div>
    </div>
  )
}

export default Card