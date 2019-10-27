import React from 'react'

class SidebarItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.label}</p>
            </div>
        )
    }
}

export default SidebarItem;