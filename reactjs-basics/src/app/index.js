import React from "react" 
import {render} from "react-dom"

class App extends React. Copmenent {
	render() {
		return (
			<div className= "container">
			<div className= "row">
			<div className= "col-xs-10 col-xs-offset-1">
			   <h1>Hello!</h1?
	      </div>
	  </div>
 	</div>

 	   )
	}
} 
render(<App/>, window.document.getElementBYId("app"));