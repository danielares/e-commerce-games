import { useState, useEffect } from 'react'
import styles from './Games.module.css'

import React from 'react'

const Games = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        const loadData = () => {
            fetch('/api/games/', { mode: 'no-cors' })
                .then(response => response.json())
                .then(data => setGames(data))
        }
        loadData()
    }, [])

    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col text-center">
                    <h1>Games</h1>
                    <div className="row">
                        {games.map(game => (
                            <div className="col-12 col-md-4">
                                <div className={styles.games} key={game.id}>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={game.image} alt="Capa do jogo" />
                                        <p className='h4 mt-2 fw-bold'>{game.name}</p>
                                        <p className='h5 fw-bold'>R${game.price}</p>
                                        <p className='h5 fw-bold'>{game.score}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games