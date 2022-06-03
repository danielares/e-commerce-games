import {useState, useEffect} from 'react'
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
            <h1 className='text-center fw-bold'>Meus pedidos</h1>
            <div className="row">
                {orders.map(order => (
                    <div className="col-12 mt-2">
                        <div className={styles.orders} key={order.id}>
                            <div className='text-center'>
                                <p className='h4 mt-2 fw-bold'>Item: {order.item}</p>
                                <p className='h5 fw-bold'>Preço: {order.final_price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders