import React, { useEffect, useState } from 'react'
import '../App.css'
const ContactCard =( props ) =>{

const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
<img src={props.avatarUrl}
 />
<div className="user-details">
<p>{props.name}</p>
<p>{props.email}</p>
<button onClick={()=> setShowAge(!showAge)  }>show Age</button>
{showAge && <p>age : {props.age}</p>}
</div>
</div>
  )
}

export default ContactCard
