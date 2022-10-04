import React from 'react'
import './Columns.css'
import Comp from './Comp'
import emojiList from '../data/Emoji'

function Columns(prop) {

  //This functions filter outs the data or array for state variable which defines keyword or the cata
  const filterfy = (reg, cata) => {
    return emojiList.filter((element) => {
      if (cata === "general") return (element.aliases[0].includes(reg)|| element.description.includes(reg));
      else if (cata === "others") return (element.aliases[0].includes(reg)|| element.description.includes(reg)) && (element.category === "Symbols" || element.category === "Flags");
      else return (element.aliases[0].includes(reg)|| element.description.includes(reg)) && (element.category === cata);
    });

  }
  //calling the function to filter array.
  let data = filterfy(prop.keyword, prop.catagory);

  console.log()
  return (
    <div className='Columns'>
      {/* Array is mapped here with each object being passed to the Comp component which defines every individual data entry*/}
      {
        data.map(emojiList => {

          return (
            <Comp emojiList={emojiList} />
          );
        })
      }

    </div>
  )
}

export default Columns