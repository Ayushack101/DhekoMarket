import React from 'react';
import './ServiceWeProvide.css';

const ServiceWeProvide = () => {
  const serviceCards = [
    {
      title: 'Hygienic Products',
      description:
        'We provide hygienic and sanitized products to ensure your safety.',
      icon: 'fa-solid fa-pump-soap',
    },
    {
      title: 'Single Use Items',
      description:
        'Our services include single-use items to minimize contact and ensure freshness.',
      icon: 'fa-solid fa-box-open',
    },
    {
      title: 'Low-Contact Services',
      description:
        'We prioritize low-contact interactions to protect your health.',
      icon: 'fa-solid fa-hands-helping',
    }
  ];

  return (
    <div className='serviceweprovide'>
      <p className='serviceprovide'>Service we Provide</p>
      <p className='descript'>
        Hygienic & Single use products | Low-contact services
      </p>
      <div className='descriptcards'>
        {serviceCards.map((card, index) => (
          <div className='descriptcard' key={index}>
            <div className='card-icon'>
              <i className={`fa ${card.icon}`}></i>
            </div>
            <h3 className='card-title'>{card.title}</h3>
            <p className='card-description'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWeProvide;
