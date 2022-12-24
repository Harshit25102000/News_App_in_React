import React from 'react'

const NewsItem=(props)=> {
 
    let {title, description, imageUrl,newsUrl,author,date}= props;
    return (
      <div className="my-3" style={{width:'414px'}}>
        <div className="card" style={{}}>
  <img className="card-img-top" style={{height: '233px',
    width: '414px'}}src={imageUrl?imageUrl:"https://images.axios.com/k8GLI4WwZaLJprTxQoUPElSaE7c=/0x192:2518x1608/1366x768/2022/12/22/1671728414621.jpg"} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
