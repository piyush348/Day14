import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const BACKEND_URL = process.env.BACKEND_URL

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signUp = async () => {
        if (!email || !password) {
            return
        }
        const response = await fetch(`${BACKEND_URL}/api/v1/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <Navbar page='signup' />
            <div>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp