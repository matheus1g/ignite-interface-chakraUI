
import { Banner } from "../components/Banner";
import { Categories } from "../components/category";
import { Header } from "../components/Header";
import { Separador } from "../components/Separador";
import { Carousel } from "../components/Carousel"
import { ContentCarousel } from "../components/Carousel/ContentCarousel";

export default function Home() {
  return (
  <>
    <Header />
    <Banner />
    <Categories />
    <Separador />
    <Carousel />
  </>
  )
}
