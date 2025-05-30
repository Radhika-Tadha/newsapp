import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor() {
        //first run
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        //it last run
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c98bdf7310504caa9a7d7f571f9a2717";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })

    }

    render() {
        //second run
        return (
            <div cla="container my-4" style={{ marging: '20px' }}>
                 <h2 className="text-center mb-4">NewsMonkey - Top Headlines</h2>
                    <div className="row justify-content-center">
                         <div className="col-md-10 offset-md-1"> 

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 mb-4 d-flex align-items-stretch" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 300) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}



                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default News
