import React from 'react'

class Article extends React.Component {
    render() {
        console.log(this.props)
        return (
            <article>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </article>
        )
    }
}

export default Article;