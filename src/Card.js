import React from 'react';
import MyButton from './MyButton';

class Card extends React.Component {
  render() {
    const cardStyle = {
      display: 'flex',
      width: '14rem',
      height: '18rem',
      boxShadow: '1px 1px #7589a8',
    }
    return (
      <div style={cardStyle}> 
        <h1>Hello, World!</h1>
        <MyButton />
      </div>
    );
  }
}

export default Card;