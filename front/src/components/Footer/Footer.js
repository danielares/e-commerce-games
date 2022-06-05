const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white mt-5">

                <div className="container p-4 pb-2">

                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://www.instagram.com/danielares/" role="button"><i className="bi bi-instagram"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-ares" role="button"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://github.com/danielares" role="button"><i className="bi bi-github"></i></a>
                    </section>
                    <div className="text-center">
                        <em>Author: Daniel Ares Moraes</em>
                    </div>

                </div>
                <div className="copyright text-center p-3">
                    © 2022 Copyright:
                    <a href="/home"> e-commerce de jogos</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer