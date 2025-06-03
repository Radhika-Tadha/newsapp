import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes, { string } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loadding, setLoadding] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    //  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c98bdf7310504caa9a7d7f571f9a2717&page=1&pageSize=${props.pageSize}`;
        props.setProgress(10);
        setLoadding(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoadding(false)

        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])


    const HandlePrevious = async () => {
        setPage(page - 1)
        updateNews();
    }
    const HandleNext = async () => {
        setPage(page + 1)
        updateNews();
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c98bdf7310504caa9a7d7f571f9a2717&page=1&pageSize=${props.pageSize}&page=${page+1}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    //second run
    return (
        <>
            <h2 className="text-center mb-4 pt-3">NewsMonkey - Top Headlines on {capitalizeFirstLetter(props.category)}</h2>
            {/* {state.loading && <Spinner />} */}
            {/* <div className="row justify-content-center"> */}
            <div className="col-md-10 offset-md-1">

                <InfiniteScroll
                    dataLength={articles ? articles.length : 0}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">

                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        </>
        // </div>
    )
}
News.defaultProps = {
    country: 'us',
    pageSize: 15,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
