import React from 'react'
import MyDate from './MyDate';

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        // render() is an React method and it's job is to erite everything to the DOM
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children}
           </div>
           
            // <div>
            //     <h1>{this.props.title}</h1>
            //     <p>{this.props.description}</p>
            //     <img src="http://tiny.cc/gjq1dz"></img>
            // </div>
        )
    }
}

export default Card;