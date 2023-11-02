import React from 'react'
import "./ContainerCard.css"
const ContainerCard = ({name,ImageURL}) => {
  return (
    <div className='container'>
        <div className="containerimg">
            <img src={ImageURL} alt="" />
        </div>
        <div className="containertitle">{name}</div>
    </div>
  )
}

export default ContainerCard