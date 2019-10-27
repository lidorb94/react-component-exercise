import React from 'react';

const date = (new Date()).toString()

class MyDate extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <p>{date}</p>
            </div>
        )
    }
}

export default MyDate;