import React, { useState } from 'react'

function Tour({id, image, name, info, price,removeTour}) {

  const [readMore, setReadMore] = useState(false)
  // console.log(info.substring(0,10));
  return (
    <div className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}.....`}
        <button type='button' className='info-btn' onClick={()=>setReadMore(readMore=>!readMore)}>{readMore? ' Show Less': '    Read More'}</button>
        </p>
      <button className='delete-btn btn' onClick={()=>removeTour(id)}>Remove</button>
      </div>
      
    </div>
  )
}

export default Tour
