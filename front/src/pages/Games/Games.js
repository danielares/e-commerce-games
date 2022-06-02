import { useState, useEffect } from 'react'
import styles from './Games.module.css'

const Games = () => {

    const [games, setGames] = useState([])
    const [filter, setFilter] = useState("score")
    const [user, setUser] = useState("")

    useEffect(() => {
        const loadData = () => {
            fetch('/api/games/' + filter + '/', { mode: 'no-cors' })
                .then(response => response.json())
                .then(data => setGames(data))
        }
        loadData()
    }, [filter])


    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    useEffect(() => {
        const loadData = () => {
            fetch('/api/users/current-user/', { mode: 'no-cors' })
                .then(response => response.json())
                .then(data => setUser(data))
        }
        loadData()
        console.log(user.username)
    }, [])

    const addCart = (id, price) => {
        const item = {
            user: user.id,
            item: id,
            quantity: 1,
            price: price
        };

        fetch('/api/order/my-cart/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        console.log(item)
    };


    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col text-center">
                    <h1 className='fw-bold'>Games</h1>
                    <div className="row">

                        <div className="col-12">
                            <div class="list-group list-group-horizontal text-center bg-dark">
                                <button onClick={() => setFilter('price')} class="list-group-item list-group-item-action list-group-item-dark">Preço</button>
                                <button onClick={() => setFilter('score')} class="list-group-item list-group-item-action list-group-item-dark">Popularidade</button>
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
                                        <button className='btn btn-outline-primary' onClick={() => addCart(game.id, game.price)}>
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
        </div>
    )
}

export default Games