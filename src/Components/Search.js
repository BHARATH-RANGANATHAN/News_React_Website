
import React from "react"
import axios from "axios"


class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:"",
            results:[]
        }
    }
    fetchSearch=(text)=>{
        const searchUrl=`https://newsapi.org/v2/everything?q=${text}&apiKey=${process.env.REACT_APP_API_KEY}`
         axios.get(searchUrl)
         .then(res=>{
             console.log(res.data.articles)
            this.setState({results:res.data.articles})
         })
        }
    handleChange=(event)=>{
        const text=event.target.value
        this.setState({text:text},()=>{
        this.fetchSearch(text);
        })
    }
    renderResults=()=>{
        const {results}=this.state
        return(
            <div className="cards">
            {results.map(result => (
                <div className="card">
                <img src={result.urlToImage} alt="search"/>
                    <h4>{result.title}</h4>
                    <hr />
                    <p>{result.content}</p>
                    <a href={result.url} target="_blank" rel="noreferrer">{result.url}</a>
                </div>
            ))}
        </div>
        )
    }
    render(){
    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Search News.ie..." name="search" value={this.state.text} onChange={this.handleChange} />                
            </div>
            <div>
                {this.renderResults()}
            </div>
        </div>
    );
}
}

export default Search;