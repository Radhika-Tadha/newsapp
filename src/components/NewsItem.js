import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description,ImageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width:"18rem"}}>
                    <img src={!ImageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OHKSZQLM6DMA5L5MTBPBBX2NRY.JPG&w=1440":ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-md btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

