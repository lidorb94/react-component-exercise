import React from 'react'

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                <a href={this.props.url}>
                {this.props.label}
                </a>
            </li>
        )
    }
}

export default ListItem;