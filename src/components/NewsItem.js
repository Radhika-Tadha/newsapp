import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description,ImageUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width:"18rem"}}>
                    <img src={ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-md btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

