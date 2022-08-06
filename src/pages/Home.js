import SwiperJS from "../components/Swiper.pagination-dinamic/swiper"
import SwiperInfiniteLoop from "../components/Swiper.infinite-loop-slides-group/swiper"
import './Home.scss'

// primero, crear estructura en pag "App", y llamar a "home" 
const Home = () => {
    return (
        <>
        <div className="swiper-carrousel">
            <SwiperJS />
        </div>
        <div className="swiper-infiniteloop">
            <h1 className="homeMarcas">NAVEGÁ POR MARCAS</h1>
            {<SwiperInfiniteLoop />}
        </div>
        </>
    )
}

export default Home