import * as React from 'react';



export class WeatherShow extends React.Component {
    constructor(props,state){
        super(props,state);
        
    }
    render() {
        return (
          
            <div>
                    
<<<<<<< HEAD
                <div className = "container " >
                    <div className="iconWeather">
                        <img className="" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={ this.props.icon}/>
                        <p > {this.props.description}</p>
                    </div>
                    <div  className="alert alert-success " role="alert" id="blink1">
                        <p>{ this.props.city }</p> 
                        <p>{ this.props.temperature }</p>
                        <p>{ this.props.pressure }</p>
                        <p>{ this.props.humidity }</p>
                        {/* <p>{ this.props.description }</p> */}
                        <p>{ this.props.wind }</p>
                    </div>
                    
=======
                <div className = "container">
                    <p>{ this.props.city }</p> 
                    <p>{ this.props.temperature }</p>
                    <p>{ this.props.pressure }</p>
                    <p>{ this.props.humidity }</p>
                    <p>{ this.props.description }</p>
                    <p>{ this.props.wind }</p>
>>>>>>> 386328b4d1d1d644634fbd421160aa7517397327
                </div>
            
                <p className = "error">{this.props.error}</p>
            </div>
        );
    }
}