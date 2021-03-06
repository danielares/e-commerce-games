import { useState, useEffect } from 'react'
import styles from './Cart.module.css'
import { getCookie } from '../../utils/getCsrftToken';

const Cart = () => {
    const csrftoken = getCookie('csrftoken');
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState("")
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
                                            <p className='h5 fw-bold'>Pre??o: {item.final_price}</p>
                                            <button className='btn btn-outline-danger mt-2' onClick={() => RemoveCart(item.id)}>
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
                                <p className='h5 mt-2 fw-bold'>Pre??o dos jogos: R$ {price.price}</p>
                                <p className='h5 mt-2 fw-bold'>Frete: R$ {price.shipping}</p>
                                <p className='h5 mt-2 fw-bold'>Pre??o total: R$ {price.final_price}</p>
                                <button className='btn btn-outline-primary mt-2' onClick={() => checkout()} >
                                    Finalizar pedido
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="col-12 mt-2">
                            <div className='text-center'>
                                <p className='h5 mt-2 fw-bold'>Voc?? ainda n??o tem nada no seu carrinho!</p>
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