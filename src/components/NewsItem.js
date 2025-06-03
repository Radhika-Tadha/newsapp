import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, ImageUrl, newsUrl, author, date,source} = this.props;
        return (

            <div className='my-3'>
                <div className="card">
                    <img src={!ImageUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OHKSZQLM6DMA5L5MTBPBBX2NRY.JPG&w=1440" : ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
                           {source}
                            <span class="visually-hidden">unread messages</span>
                        </span></h4>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author}   On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-md btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

