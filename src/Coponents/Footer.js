import React from 'react'

function Footer(props) {
  return (
    <div className='footer'><marquee>{props.data}</marquee></div>
  )
}

export default Footer