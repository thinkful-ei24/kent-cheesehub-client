import React from 'react';

function CheeseList(props) {
  const cheeses = props.cheeses.map(cheese => <li>{cheese}</li>)
  return (
    <ul>
      {cheeses}
    </ul>
  )
}


export default CheeseList