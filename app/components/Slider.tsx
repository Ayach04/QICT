'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

export default function Slider() {
  const slides = [
    {
      image: '/images/it_service/slide01.jpg',
      title: 'Installation de systèmes de vidéosurveillance et de sécurité',
      subtitle: 'Sécurisez vos locaux avec notre service de vidéosurveillance',
    },
    {
      image: '/images/it_service/slide02.jpeg',
      title: 'Systèmes de pointage et de contrôle de présence',
      subtitle: 'Optimisez la présence du personnel avec nos systèmes de pointage',
    },
    {
      image: '/images/it_service/slide3.jpg',
      title: 'Engagement & Proximité',
      subtitle: 'Un partenaire à votre écoute, engagé à vos côtés pour atteindre vos objectifs.',
    },
    {
      image: '/images/it_service/slide4.jpg',
      title: 'Support Informatique Fiable & Réactif',
      subtitle: 'Votre partenaire de confiance pour des solutions performantes, pensées pour durer.',
    },
    {
      image: '/images/it_service/slide5.jpg',
      title: 'Partenaire de Confiance pour vos Projets Digitaux',
      subtitle: ' Intégration stratégique, conseil expert et support réactif : une approche globale pour des systèmes performants et évolutifs',
    },
  ];

  return (
    <section id="slider" className="main_slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="swiper-slide"
          >
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
