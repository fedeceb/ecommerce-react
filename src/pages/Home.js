import SwiperJS from "../components/Swiper.pagination-dinamic/swiper"
import SwiperInfiniteLoop from "../components/Swiper.infinite-loop-slides-group/swiper"
import './pages.scss'
import DestacadosConitainer from "../components/Prod-destacados/Container"

const Home = () => {
    return (
        <>
        <div className="swiper-carrousel">
            <SwiperJS />
        </div>
        <div className="swiper-infiniteloop">
            <h1 className="homeMarcas">NAVEGÁ POR MARCAS</h1>
            <SwiperInfiniteLoop />
        </div>
        <div className="destacados">
            <h1 className="homeMarcas"> PRODUCTOS DESTACADOS </h1>
            <DestacadosConitainer/>
        </div>
        </>
    )
}

export default Home