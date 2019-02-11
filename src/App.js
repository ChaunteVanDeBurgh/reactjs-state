import React from 'react';
import Card from './Card';

class App extends React.Component {
	render() {
		const divStyle = {
			display: 'flex',
			justifyContent: 'space-around'
		}

		return (
			<div style={divStyle}>
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default App;