import React from 'react'
import "./Gallery2.css"
const Gallery2 = () => {
  return (
    <div className='gallerycontainer'>
      <div className='gallerytitle'>Gallery</div>
      <div className='gallery'>
            <div data-aos="fade-up" data-aos-delay="100" className='item'>
                <img src="/Images/img1.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className='item'>
                <img src="/Images/img2.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='item'>
                <img src="/Images/img4.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='item'>
                <img src="/Images/img5.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='item'>
                <img src="/Images/img6.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='item'>
                <img src="/Images/img7.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='item'>
                <img src="/Images/img8.webp" className='parallax' alt="" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='item'>
                <img src="/Images/img10.webp" className='parallax' alt="" />
            </div>
      </div>
    </div>
  )
}

export default Gallery2
