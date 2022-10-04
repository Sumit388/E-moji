import React from 'react'
import './Comp.css'
import './Comp.css'
function Comp(prop) {
   //Setting the components value to the objects property that has been passed as a prop
  return (
    <div className='Comp'>
        <div className="container">
     <div className="CompEmoji">
        {prop.emojiList.emoji}
     </div>
     <div className="CompName">
        {prop.emojiList.aliases[0]}
     </div>
     <div className="CompDescription">
        {prop.emojiList.description}
     </div>
     </div>
    </div>
  )
}

export default Comp