import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default class App extends React.Component {
	
	
	
	render(){
		
		var firstNames = ['Michael', 'Dan', 'James', 'Tony', 'Alan']
		var lastNames = ['Sullivan', 'Bishop', 'Stubbs', 'Silva', 'Lebihan']
	    
		
		return (
			<div>
			
			    {firstNames.map((ele)=>{
				    return <Child1 name={ele}/>
				})}
				
				{lastNames.map((ele)=>{
					return <Child2 name={ele}/>
				})}
				
				
			</div>
		)
	}
}


