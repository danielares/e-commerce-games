import { useState, useEffect, useCallback } from 'react'
import styles from './Cart.module.css'
import { getCookie } from '../../utils/getCsrftToken';

const Cart = () => {
    const csrftoken = getCookie('csrftoken');
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(null)
    const [update, setUpdate] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/api/order/cart/')
            const json = await res.json()
            setCart(json)
        }
        loadData()
    }, [update])

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/api/order/price-order/')
            const json = await res.json()
            setPrice(json)
        }
        loadData()
        console.log(price)
    }, [update])

    const RemoveCart = async (id) => {
        const item = {
            id: id,
        };
        await fetch('/api/order/cart/' + id, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        await setUpdate(update + 1)
    };

    const checkout = async () => {
        await fetch('/api/order/checkout/', {
            method: 'PATCH',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
        })
        await setUpdate(update + 1)
    };

    return (
        <div className="container min-vh-100">
            <div className="row">
                <h1 className='text-center fw-bold'>Carrinho</h1>
                <h2 className='fw-bold'>Produtos no carrinho: {cart.length}</h2>
                <div className="row">
                    {cart.map(item => (
                        <div className="col-12 mt-2">
                            <div className={styles.cart} key={item.id}>
                                <div className="row">
                                    <div className="col-9">
                                        <div className='text-center'>
                                            <p className='h4 mt-2 fw-bold'>{item.item[0].name}</p>
                                            <p className='h5 fw-bold'>frete: {item.shipping}</p>
                                            <p className='h5 fw-bold'>Preço: {item.final_price}</p>
                                            <button className='btn btn-outline-danger' onClick={() => RemoveCart(item.id)}>
                                                <i class="bi bi-cart-dash-fill"></i>
                                                Remover do carrinho
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img src={item.item[0].image} alt="Capa do jogo" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {cart.length > 0 ? (
                        <div className="col-12 mt-2">
                            <div className={styles.cart}>
                                <p className='h5 mt-2 fw-bold'>Preço dos jogos: R$ {price[0].price}</p>
                                <p className='h5 mt-2 fw-bold'>Frete: R$ {price[0].shipping}</p>
                                <p className='h5 mt-2 fw-bold'>Preço total: R$ {price[0].final_price}</p>
                                <button className='btn btn-outline-primary' onClick={() => checkout()} >
                                    Finalizar pedido
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="col-12 mt-2">
                            <div className='text-center'>
                                <p className='h5 mt-2 fw-bold'>Você ainda não tem nada no seu carrinho!</p>
                                <p className='h5 mt-2 fw-bold'>Adicione alguns produtos <a href='/games'>aqui</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart