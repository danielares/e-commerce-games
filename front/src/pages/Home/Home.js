// IMAGES
import Witcher from '../../images/witcher.png'
import Spider from '../../images/spider.png'
import Thelast from '../../images/thelast.png'

const Home = () => {
  return (
    <div className="container min-vh-100">
      <div className="row">
        <div className="col text-center">
          <p className='h3 fw-bold m-3'>Aqui você encontra os melhores jogos!</p>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Witcher} className="d-block w-100" alt="The Witcher 3" />
                </div>
                <div className="carousel-item">
                  <img src={Spider} className="d-block w-100" alt="Spider man" />
                </div>
                <div className="carousel-item">
                  <img src={Thelast} className="d-block w-100" alt="The last of us 2" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <p className='h4 fw-bold mt-3'>Adicione alguns jogos ao seu carrinho <a href="/games">aqui</a></p>
        </div>
      </div>
    </div>
  )
}

export default Home