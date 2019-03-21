import * as React from 'react';
import {agent} from "../utils/agent";
import "./Players.scss";

export class Players extends React.Component {
    constructor(p, s) {
        super(p, s);

        this.state = {
            newPlayer: {name: '', age: '77'},
            players: []
        };

        this.loadAll();
    }

    render() {
        return (
            <div id="Players">
               <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                </div>

                

               <div className="card">
                    <div className="card-body">
                        <form  action="#">
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="my name"
                                       onChange={(e) => this.changeNewPlayerName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Age: </label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="my age"
                                       onChange={(e) => this.changeNewPlayerAge(e.target.value)}
                                />
                            </div>

                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick={() => this.addNewPlayer()}
                            >Add</button>

                        </form>
                    </div>


                </div>


               
                <div> {JSON.stringify(this.state.newPlayer)} <br/>
                    
                    <label> Name: </label>
                    <input type="text" onChange={(e) => this.changeNewPlayerName(e.target.value)}/>
                </div>

                <div>
                    <label>Age: </label>
                    <input type="text" onChange={(e) => this.changeNewPlayerAge(e.target.value)}/>
                </div>

                <button onClick={() => this.addNewPlayer()}>Add</button>

                <ul>
                    {this.state.players.map((player, i) => {
                        return (
                        <li key={i}>
                        name: {player.name}, age: {player.age}
                        <button onClick={()=> {this.RemoveElemObj(i)}}>Remove</button>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }


    RemoveElemObj(i){
        this.state.players.splice(i,1);
        
        agent.Player.deleteElem(this.state.players, () => {
            this.loadAll();
        })
        
       
    }
    


    changeNewPlayerName(name) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {name} )
        })
    }

    changeNewPlayerAge(age) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {age} )
        })
    }

    addNewPlayer() {
        agent.Player.add(
            this.state.newPlayer,
            this.state.players.length,
            () => {
               this.loadAll();
            }
        )
    }

    async loadAll() {
        const players = await agent.Player.getAll();
        this.setState({players});
    }
}