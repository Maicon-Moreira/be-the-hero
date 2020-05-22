import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogon(e) {
        e.preventDefault()

        const data = { id }
        
        try {
            const response = await api.post('sessions', data)

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
            
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder='Sua ID'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className='button' type='submit'>Entrar</button>

                    {/* Deprecated */}
                    {/* <a href="/register">
                        <FiLogIn size={16} color='#e02041'></FiLogIn>
                        Não tenho cadastro
                    </a> */}

                    {/* Best way */}
                    <Link to="/register" className='back-link'>
                        <FiLogIn size={16} color='#e02041'></FiLogIn>
                        Não tenho cadastro
                    </Link>

                </form>

            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}