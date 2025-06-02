import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 15,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        //first run
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async updateNews(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
        &category=${this.props.category}
        &page=${this.state.page}
        &apiKey=c98bdf7310504caa9a7d7f571f9a2717
        &page=1&pageSize=${this.props.pageSize}`;
        { this.setState({ loading: true }) }
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();

    }
    HandlePrevious = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    HandleNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    render() {
        //second run
        return (
            <div className="container my-3" style={{ marging: '20px' }}>
                <h2 className="text-center mb-4 pt-3">NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                {/* <div className="row justify-content-center"> */}
                <div className="col-md-10 offset-md-1">

                    <div className="row">
                        {Array.isArray(this.state.articles) &&
                            !this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4 mb-4 d-flex align-items-stretch" key={element.url} >
                                    <NewsItem
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description.slice(0, 400) : ""}
                                        ImageUrl={element.urlToImage}
                                        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                    </div>
                    <div className="container d-flex justify-content-between pb-5">
                        <button
                            disabled={this.state.page <= 1}
                            type="button" className="btn btn-dark"
                            onClick={this.HandlePrevious}>&larr; Previous
                        </button>

                        <button
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)}
                            type="button"
                            className="btn btn-dark"
                            onClick={this.HandleNext}>Next &rarr;
                        </button>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}
export default News
