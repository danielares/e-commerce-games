import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-2">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="bi bi-github"></i></a>
                    </section>
                    <div className="text-center">
                        <em>Author: Daniel Ares Moraes</em>
                    </div>

                </div>
                <div className="copyright text-center p-3">
                    © 2022 Copyright:
                    <a href="#">OLY</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer