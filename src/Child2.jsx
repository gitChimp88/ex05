import React from 'react'

export default class Child2 extends React.Component {
	render(){
		return (
			<div>
				<h1>Lastname: {this.props.name}</h1>
			</div>
		)
	}
}