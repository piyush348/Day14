import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './HistoryPage.css'
import { Link } from 'react-router-dom'
import HistoryCard from './HistoryCard'

const HistoryPage = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const getData = async () => {
        try {
            // const response = await fetch('https://dummyjson.com/products')
            // const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
            const response = await fetch(`http://localhost:1010/api/v1/images`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('authToken')
                },

            })
            const obj = await response.json()
            // let products = obj.products
            // let images = obj.images
            // if (searchText)
            //     products = products.filter(item => item.title.toLowerCase().startsWith(searchText.toLowerCase()))
            setData(obj.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
        // getData(search)
    }, [search])

    return (
        <div>
            <Navbar page="history" />
            <input type='text' onChange={(e) => setSearch(e.target.value)} />
            <div className='history-main-container'>
                {
                    data.map(item => {
                        console.log(item)
                        return <HistoryCard key={item._id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default HistoryPage