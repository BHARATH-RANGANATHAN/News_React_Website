
import React, { useEffect, useState } from "react"
 

function Health() {
    useEffect(() => {
        fetchItems()
    }, [])
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?category=health&country=ie&apiKey=${process.env.REACT_APP_API_KEY}`)
        const items = await data.json()
        console.log(items.articles)
        setItems(items.articles)
    }

    return (
        <div className="cards">
            {items.map(item => (
                <div className="card">
                <img src={item.urlToImage} alt="health"/>
                    <h4>{item.title}</h4>
                    <hr />
                    <p>{item.content}</p>
                    <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>
                </div>
            ))}
        </div>
    );
}

export default Health;
// d3d2d3c5e76a4a6caa5ab8b4a459e661-api key