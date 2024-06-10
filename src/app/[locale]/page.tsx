import Carousel from './components/carousel'
import BannerCarousel from './components/banner-carousel'
import Showcase from './components/showcase'
import CarouselShowcase from './components/carousel-showcase'

export default function Home() {
  return (
      <main className={'container'}>
          <Carousel className={'mt-5'} />
          <BannerCarousel className={'mt-5'} />
          <Showcase className={'mt-5'} />
      </main>
  );
}
