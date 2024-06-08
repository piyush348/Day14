import React from 'react'
import { Link } from 'react-router-dom'

const HistoryCard = (props) => {
    const item = props.item
    return (
        <div key={item.id} className='history-item'>
            <h3>{item.query}</h3>
            <p>{item.userId}</p>
            <p>{item.createdAt}</p>
            <p>{item.updatedAt}</p>
            <img src={item.image} alt={item.query} />
            <Link to={`/history/${item.id}`}>more...</Link>
        </div>
    )
}

export default HistoryCard