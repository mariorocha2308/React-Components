import React, { Component } from "react";
import './propsPage.css'

class Card extends Component {
    render() { 
        return ( 
            <div className='card'>
                <div className='upTitle'>
                  <h2>{this.props.name}</h2>
                </div>
                
                <div className='centerStyle'>            
                    <h3 >Nickname: {this.props.nickname}</h3>
                    <h3>Email: {this.props.email}</h3>
                    <h4>Code: {this.props.code}</h4>               
                    <h4>Phone: {this.props.phone}</h4>                
                </div>
                <div className='endStyle'>
                       
                    <h4>latitud: {this.props.lat}</h4>
                    <h4>longitud: {this.props.lng}</h4>
                </div>
                
            </div>
         );
    }
}
 
export default Card;