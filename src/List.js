import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {

    render() {
        return (
            <ul>
                <ListItem url="http://www.google.com" label="item one"/>
                <ListItem url="http://www.facebook.com" label="item two"/>
                <ListItem url="http://www.yahoo.com" label="item three"/>
            </ul>
        )
    }
}

export default List;