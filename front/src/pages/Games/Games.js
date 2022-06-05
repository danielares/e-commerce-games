import { useState, useEffect } from 'react'
import { getCookie } from '../../utils/getCsrftToken';
import styles from './Games.module.css'

const Games = () => {

    const [games, setGames] = useState([])
    const [filter, setFilter] = useState("score")
    const [user, setUser] = useState("")
    const [update, setUpdate] = useState(null)
    const [cart, setCart] = useState([])
    const csrftoken = getCookie('csrftoken');

    useEffect(() => {
        const loadData = () => {
            fetch('/api/games/' + filter + '/')
                .then(response => response.json())
                .then(data => setGames(data))
            fetch('/api/users/current-user/')
                .then(response => response.json())
                .then(data => setUser(data))
        }
        loadData()
    }, [filter])

    useEffect(() => {
        const loadData = () => {
            fetch('/api/order/cart/', { mode: 'no-cors' })
                .then(response => response.json())
                .then(data => setCart(data))
        }
        loadData()
    }, [update])

    const addCart = async (game) => {
        const item = {
            user: user.id,
            shipping: 10,
            price: game.price,
            item: [{
                id: game.id,
                name: game.name,
                price: game.price,
                score: game.score,
            }],
        };
        await fetch('/api/order/cart/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        await setUpdate(update + 1)
    };


    return (
        <div className="container min-vh-100">
            <div className="row">

                <h1 className='text-center fw-bold'>Games</h1>
                <h2 className='fw-bold'>Produtos no carrinho: {cart.length}</h2>
                <div className="row">

                    <div className="col-12">
                        <div class="list-group list-group-horizontal text-center bg-dark">
                            <button onClick={() => setFilter('price-cres')} class="list-group-item list-group-item-action list-group-item-dark">Preço crescente</button>
                            <button onClick={() => setFilter('price-des')} class="list-group-item list-group-item-action list-group-item-dark">Preço decrescente</button>
                            <button onClick={() => setFilter('score')} class="list-group-item list-group-item-action list-group-item-dark">Mais procurados</button>
                            <button onClick={() => setFilter('alphabetic')} class="list-group-item list-group-item-action list-group-item-dark">Ordem alfabética</button>
                        </div>
                    </div>

                    {games.map(game => (
                        <div className="col-12 col-md-3 mt-2">
                            <div className={styles.games} key={game.id}>
                                <div className='text-center'>
                                    <img className='img-fluid' src={game.image} alt="Capa do jogo" />
                                    <p className='h4 mt-2 fw-bold'>{game.name}</p>
                                    <p className='h5 fw-bold'>R${game.price}</p>
                                    <button className='btn btn-outline-primary' onClick={() => addCart(game)}>
                                        <i class="bi bi-cart-fill"></i>
                                        Adicionar ao carrinho
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Games