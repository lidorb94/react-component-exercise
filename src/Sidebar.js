import React from 'react'
import SidebarItem from './SidebarItem'

class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <SidebarItem label="buttom one"/>
                <SidebarItem label="buttom two"/>
                <SidebarItem label="buttom three"/>
            </div>
        )
    }
}

export default Sidebar; 