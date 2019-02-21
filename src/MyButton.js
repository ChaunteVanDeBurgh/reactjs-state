import React from 'react';

class MyButton extends React.Component {
	render() {
		const buttonStyle = {
			backgroundColor: 'red',
			color: 'white'
		}
		return (
			<div style="buttonStyle"> submit </div>
		);
	}
}

export default MyButton;