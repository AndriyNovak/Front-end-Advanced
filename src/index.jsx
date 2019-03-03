import * as React from "react"; //імпортувати все як реакт
import * as ReactDOM from "react-dom";

//  class App extends React.Component {

// 	constructor(props,state){
// 		super(props,state); //обовязково визвати конструктор нобхідно

// 		this.state = {
// 			counter:0
// 		}
// 	}

// 	render(){
// 		return (
// 			<div >
// 				<button onClick={()=>this.minus()}>Minus</button>
// 				<span>{this.state.counter}</span>
// 				<button onClick={()=>this.plus()}>Plus</button>
// 				{this.props.fert}
// 			</div>
// 		)
// 	}

// 	minus(){
// 	this.setState( {
// 		counter:this.state.counter - 1
// 	})
// }
// 	plus(){
// 	this.setState( {
// 		counter:this.state.counter + 1
// 	})
// }}


// ReactDOM.render(<App fert="asd"/>,document.getElementById("root"));


//  // let li = React.createElement("li",{className:"list"},"asdadad");


 
//  class AddList extends React.Component {
// 	constructor(props,state,event){
// 		super(props,state); //обовязково визвати конструктор нобхідно

// 		this.state = {
// 			text:""
// 		}	
// 	}	
	
// 	render() {   
// 	    return (
		
// 	    )
// 	}
		
// }

class CreateList extends React.Component {
	constructor(props,state){
		super(props,state);
		this.state = {
			inpValue:"",
			toList:[]

		}	
	}

	inputText(event){		 
		this.setState({
			inpValue:event.target.value 
		})		
		
	}
	
	addListBtn(){
		this.setState({
			toList: [...this.state.toList,this.state.inpValue] //...this.state.toList   ...копіруемо масив
					
		})

	}

	render() {
		console.log("state: ",this.state.inpValue);
		console.log("List: ",this.state.toList);
		return (
			<div className="wrap">	
				<div className="wrap-input">
					<input className="inputText" onChange={this.inputText.bind(this)} type="text" name="textInp" placeholder="Введите текст"></input>
					<button className="btnAdd" onClick={this.addListBtn.bind(this)} >Add</button>
				</div>
				<ul id="toDoList" > 
					{this.state.toList.map(function(el){
						return <li className="list">{el}</li>
					})
					}
					
				</ul>
			</div>	
			
		)
	}
}
 // onChange={(event)=>this.inputText(event)}


const getId = 	document.getElementById("block-todolist");

	
ReactDOM.render(<CreateList />,getId);