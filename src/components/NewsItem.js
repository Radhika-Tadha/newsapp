import React from 'react'

const NewsItem = (props) => {


    let { title, description, ImageUrl, newsUrl, author, date, source } = props;
    return (

        <div className='my-3'>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!ImageUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OHKSZQLM6DMA5L5MTBPBBX2NRY.JPG&w=1440" : ImageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author}   On {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-md btn-dark">Read more</a>
                </div>
            </div>
        </div>

    )
}


export default NewsItem

