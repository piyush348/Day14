import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const dummyData = [
    {
        id: '1',
        title: 'Dog',
        date: {
            day: '2021-09-09',
            time: '12:00:00',
        }
    },
    {
        id: '2',
        title: 'Cat',
        date: {
            day: '2021-09-10',
            time: '12:00:00',
        }
    },
    {
        id: '3',
        title: 'Bird'
    },
    {
        id: '4',
        title: 'Fish',
        date: {
            day: '2021-09-12',
            time: '12:00:00',
        },
    }
]

const changeTitle = () => {
    console.log('change title')
}

const changeDescriptoin = () => {
    console.log('change description')
}

const History = () => {
    const [title, setTitle] = useState("Default")
    const [description, setDescription] = useState("Default")


    return (

        <div>
            <Navbar />
            <button onClick={changeTitle}>Change Title</button> <br />
            <button onClick={changeDescriptoin}>Change Description</button> <br />
            <button onClick={() => { changeTitle(); changeDescriptoin(); }}>Change Title & Description</button> <br />

            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /><br />

            <h1>{title}</h1>
            <p>{description}</p>

            <div className='history-container'>
                {
                    dummyData.map((item) => {
                        return (
                            <div key={item.id} className='history-item'>
                                <h3>{item.title}</h3>
                                <p>{item.date?.day} - {item.date?.time}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History