import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const updateNews=async ()=>{ //componendidmount runs after rendering and async means it will run when done 
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=722f2cba0ed54ad89607e026db3c3532&page=${ page}&pageSize=${ props.pageSize}`;
        props.setProgress(30);
        setLoading(true)
        let data =await fetch(url);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category} - Khabar Wala`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])





    const fetchMoreData = async() => {
        
        let url=`https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=722f2cba0ed54ad89607e026db3c3532&page=${ page+1}&pageSize=${ props.pageSize}`;
        setPage(page+1)
        let data =await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
        

    };

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop:"10%", marginBottom:"5%"}}>Top Headlines of {props.category=="general"?"":props.category} in India</h1>
        <div className="text-center">
            
        {loading && <Spinner/>} {/*if loading is true then spinner */}
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
       <div className="container">
        <div className="row">
    
        {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem key={element.url} title={element.title?element.title.slice(0,45):"Title Not Available"} description={element.description?element.description.slice(0,88):"Description Not Available"} imageUrl={element.urlToImage} newsUrl={element.url}
            author={element.author?element.author:"Unknown"} date={element.publishedAt}/>
            </div>
        })}
            

           
        </div>
        </div>
        </InfiniteScroll>
   
       
      </div>
    )
  
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
