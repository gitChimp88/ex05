import React from 'react'

export default class Child1 extends React.Component {
	render(){
		return (
			<div>
				<h1>Firstname: {this.props.name}</h1>
			</div>
		)
	}
}