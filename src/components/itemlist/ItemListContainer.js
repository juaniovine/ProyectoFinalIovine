import React from 'react'


const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '50px',
    borderRadius: '7px',
  };
  
const greetingStyle = {
    fontSize: '26px',
    color: 'darkblue',
  };
  


export default function ItemListContainer(props) {

  return (
    <div style={containerStyle}>
      <p style={greetingStyle}>{props.greeting}</p>
    </div>
  )
}
