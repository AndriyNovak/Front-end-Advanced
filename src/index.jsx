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



//-------------------------------------------------------------------------
// class CreateList extends React.Component {
// 	constructor(props,state){
// 		super(props,state);
// 		this.state = {
// 			inpValue:"",
// 			toList:[]

// 		}	
// 	}

// 	inputText(event){		 
// 		this.setState({
// 			inpValue:event.target.value 
// 		})		
		
// 	}
	
// 	addListBtn(event){
		
// 		this.setState({
			
// 			toList: [...this.state.toList,this.state.inpValue] ,
// 			inpValue:""
// 		});


// 	}
	

// 	render() {
// 		// console.log("inpValue: ",this.state.inpValue);
// 		// console.log("List: ",this.state.toList);
// 		return (
// 			<div className="wrap">	
// 				<div className="wrap-input">
// 					<input className="inputText" onChange={this.inputText.bind(this)} value = {this.state.inpValue} type="text" name="textInp" placeholder="Введите текст"></input>
// 					<button className="btnAdd" onClick={this.addListBtn.bind(this) } >Add</button>
// 				</div>
// 				<ul id="toDoList" > 
// 					{
// 						this.state.toList.map((el,i) =>{
						
// 							return (<li className="list" key={i}>
// 							<span className="text">{el}</span>
// 							<button className="btnRemove" onClick={this.removeItem.bind(this,i)}>Remove</button>
// 							</li>)

// 						})
// 					}
					
// 				</ul>
// 			</div>	
			
// 		)
// 	}

// 	removeItem(i){
// 		this.state.toList.splice(i, 1);
//         this.setState({
//         	toList: [...this.state.toList]
//         })
// 	}

// };
//  // onChange={(event)=>this.inputText(event)}
// 	//toList: [...this.state.toList,this.state.inpValue] ...this.state.toList   ...копіруемо масив

// const getId = 	document.getElementById("block-todolist");

	
// ReactDOM.render(<CreateList />,getId);

//--------------------------------------------------------------------------------------------------



import { TodoItem } from './components/TodoItem.jsx';

import { CircleGame } from './move_circle/move_circle.jsx';
// import { speedClass } from './move_circle/speed.jsx';

import { Game } from './game/Game.jsx';
// import { GameItem } from './game/GameItem.jsx';

class App extends React.Component {

    constructor(props, state) {
        super(props, state);
		// this.game = new Game,
        this.state = {
            list: [
                { name: 'aaaa',color:"red" },
                 { name: 'aaaa',color:"red" },
                 { name: 'aaaa',color:"red" },
                   { name: 'aaaa',color:"red" },
                  { name: 'aaaa',color:"red" },
                   { name: 'aaaa',color:"red" },
            ]
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.palayGame()}>Play</button>
                <button onClick={() => this.newColor()}>newColor</button>
                <button onClick={() => this.addItem()}>Add</button>
                <ul>
                    {this.state.list.map((item, i) => (
                        <TodoItem key={i}
                                  name={item.name}
                                  onRemove={() => this.removeItem(i)}
                                  color={item.color}/>
                    ))}
                </ul>
                <button onClick={() => this.moveCircle()}>Start Circle</button>
                
            </div>
        )
    }

    moveCircle(){
        this.circle = new CircleGame();
        // this.circle = new speedClass();
    }
   

    palayGame(){
        this.game = new Game();
    }

    newColor(){
        this.game.changeColor();
    }
    
    addItem() {
        this.setState({list: [...this.state.list, {name: 'cccc',color:"green"}]});
    }

    removeItem(i) {
        this.state.list.splice(i, 1);
        this.setState({list: [...this.state.list]})
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

