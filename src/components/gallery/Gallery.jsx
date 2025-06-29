import React from 'react'
import "./Gallery.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallery = () => {
useEffect(() => {
    AOS.init({ once: true });

    const handleScroll = () => {
      const items = document.querySelectorAll('.parallax');
      const scrollY = window.scrollY;

      items.forEach((item) => {
       const rect = item.getBoundingClientRect();
       const offset = rect.top - window.innerHeight / 2;
       const speed = 0.2;
       item.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

export default Gallery
