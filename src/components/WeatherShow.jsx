import * as React from 'react';



export class WeatherShow extends React.Component {
    constructor(props,state){
        super(props,state);
        
    }
    render() {
        return (
          
            <div>
                    
                <div className = "container">
                    <p>{ this.props.city }</p> 
                    <p>{ this.props.temperature }</p>
                    <p>{ this.props.pressure }</p>
                    <p>{ this.props.humidity }</p>
                    <p>{ this.props.description }</p>
                    <p>{ this.props.wind }</p>
                </div>
            
                <p className = "error">{this.props.error}</p>
            </div>
        );
    }
}