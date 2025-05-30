import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        //first run
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
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
    HandlePrevious = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page - 1}&pageSize=10&apiKey=c98bdf7310504caa9a7d7f571f9a2717`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }   
    HandleNext = async () => {
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page + 1}&pageSize=18&apiKey=c98bdf7310504caa9a7d7f571f9a2717${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("data",parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

    }

    render() {
        //second run
        return (
            <div cla="container my-4" style={{ marging: '20px' }}>
                <h2 className="text-center mb-4 pt-3">NewsMonkey - Top Headlines</h2>
                <div className="row justify-content-center">
                    <div className="col-md-10 offset-md-1">

                        <div className="row">
                        {Array.isArray(this.state.articles) &&
                        this.state.articles.map((element) => {
                        return <div className="col-md-4 mb-4 d-flex align-items-stretch" key={element.url} >
                        <NewsItem 
                        title={element.title ? element.title : ""} 
                        description={element.description ? element.description.slice(0, 300) : ""} 
                        ImageUrl={element.urlToImage} 
                        newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                        <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevious}>&larr; Previous</button>
                             <button
                disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)}
                type="button"
                className="btn btn-dark"
                onClick={this.HandleNext}
              >
                Next &rarr;
              </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default News
