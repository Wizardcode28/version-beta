import React from 'react'
import "./Gallery3.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow } from 'swiper/modules'


const images = [
  '/Images/img1.webp',
  '/Images/img2.webp',
  '/Images/img4.webp',
  '/Images/img5.webp',
  '/Images/img6.webp',
  '/Images/img7.webp',
  '/Images/img8.webp',
  '/Images/img10.webp',
]
const Gallery3 = () => {
  return (
    <div className="gallery-container">
      <div className='gallerytitle'>Gallery</div>
      <div className="swiper-slide">
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"

        // effect="coverflow"
        // coverflowEffect={{
        // rotate: 30,
        // stretch: 0,
        // depth: 100,
        // modifier: 2,
        // slideShadows: true,
        // }}

        breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        }}
        >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Gallery3
