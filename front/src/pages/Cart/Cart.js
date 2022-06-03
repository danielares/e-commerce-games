import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Cart.module.css'
import { getCookie } from '../../utils/getCsrftToken';

const Cart = () => {
    const csrftoken = getCookie('csrftoken');
    const [cart, setCart] = useState([])

    useEffect(() => {
        const loadData = () => {
            fetch('/api/order/cart/')
                .then(response => response.json())
                .then(data => setCart(data))
        }
        loadData()
    }, [])

    const RemoveCart = (id) => {
        const item = {
            id: id,
        };
        fetch('/api/order/cart/' + id, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    };

    return (
        <div className="container min-vh-100">
            <div className="row">
                <h1 className='text-center fw-bold'>Carrinho</h1>
                <div className="row">
                    {cart.map(item => (
                        <div className="col-12 mt-2">
                            <div className={styles.cart} key={item.id}>
                                <div className='text-center'>
                                    <p className='h4 mt-2 fw-bold'>Jogo: {item.item}</p>
                                    <p className='h5 fw-bold'>frete: {item.shipping}</p>
                                    <p className='h5 fw-bold'>Preço: {item.final_price}</p>
                                    <button className='btn btn-outline-danger' onClick={() => RemoveCart(item.id)}>
                                        <i class="bi bi-cart-dash-fill"></i>
                                        Remover do carrinho
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

export default Cart