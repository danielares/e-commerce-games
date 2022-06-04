import { useState, useEffect } from 'react'
import styles from './Orders.module.css'


const Orders = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        const loadData = () => {
            fetch('/api/order/my-orders/', { mode: 'no-cors' })
                .then(response => response.json())
                .then(data => setOrders(data))
        }
        loadData()
    }, [])

    return (
        <div className="container min-vh-100">
            <div className="row">
                <h1 className='text-center fw-bold'>Meus pedidos</h1>
                <div className="row">
                    {orders.length > 0 ? (
                        orders.map(item => (
                            <div className="col-12 mt-2">
                                <div className={styles.orders} key={item.id}>
                                    <div className="row">
                                        <div className="col-9">
                                            <div className='text-center'>
                                                <p className='h4 mt-2 fw-bold'>{item.item[0].name}</p>
                                                <p className='h5 fw-bold'>Preço: {item.final_price}</p>
                                            </div>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img src={item.item[0].image} alt="Capa do jogo" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 mt-2">
                            <div className='text-center'>
                                <p className='h5 mt-2 fw-bold'>Você ainda não tem nenhum pedido.</p>
                                <p className='h5 mt-2 fw-bold'>Compre alguns produtos <a href='/games'>aqui</a></p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
export default Orders