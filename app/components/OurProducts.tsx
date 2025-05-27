'use client';

import React from 'react';
import './OurProducts.css';
import Image from 'next/image';

const products = [
  {
    title: 'Norton Internet Security',
    image: '/images/it_service/1.jpg',
    oldPrice: '$15.00',
    newPrice: '$25.00',
  },
  {
    title: 'Kaspersky Internet Security',
    image: '/images/it_service/2.jpg',
    oldPrice: '$24.99',
    newPrice: '$12.49',
  },
  {
    title: 'Mcafee Livesafe Antivirus',
    image: '/images/it_service/3.jpg',
    oldPrice: '$24.99',
    newPrice: '$12.49',
  },
  {
    title: 'Norton Internet Security',
    image: '/images/it_service/4.jpg',
    oldPrice: '$15.00',
    newPrice: '$25.00',
  },
  {
    title: 'Kaspersky Internet Security',
    image: '/images/it_service/5.jpg',
    oldPrice: '$24.99',
    newPrice: '$12.49',
  },
  {
    title: 'Mcafee Livesafe Antivirus',
    image: '/images/it_service/6.jpg',
    oldPrice: '$24.99',
    newPrice: '$12.49',
  },
  {
    title: 'Norton Internet Security',
    image: '/images/it_service/7.jpg',
    oldPrice: '$15.00',
    newPrice: '$25.00',
  },
  {
    title: 'Kaspersky Internet Security',
    image: '/images/it_service/8.jpg',
    oldPrice: '$24.99',
    newPrice: '$12.49',
  },
];

export default function OurProducts() {
  return (
    <section className="our-products section padding_layout_1">
      <div className="container">
        <div className="main_heading text_align_center">
          <h2>Our Products</h2>
          <p className="large">
            We package the products with best services to make you a happy customer.
          </p>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="product_list">
                <div className="product_img">
                  <Image src={product.image} alt={product.title} className="img-responsive" width={500} height={300} />
                </div>
                <div className="product_detail_btm text_align_center">
                  <h4>{product.title}</h4>
                  <div className="starratin">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product_price">
                    <p>
                      <span className="old_price">{product.oldPrice}</span>{' '}
                      <span className="new_price">{product.newPrice}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
