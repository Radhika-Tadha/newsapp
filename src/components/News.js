import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("heelo i am constructor");
        this.state={
            
        }
    }
    render() {
        return (
            <div cla="container my-3">
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row justify-content-center">
                    <div className=" col-md-4">
                        <NewsItem title="mytitle" description="mydesc" ImageUrl="https://www.n-tv.de/img/incoming/crop25800868/0921325222-cImg_16_9-w1200/010debe77324a23e4d0e926e97234c1b.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>

                </div>
            </div>
        )
    }
}
export default News
