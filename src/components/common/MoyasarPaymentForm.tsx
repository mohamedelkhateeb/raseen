import React, { useEffect } from 'react';

declare const Moyasar: any; // Declare Moyasar as any type since it's loaded dynamically

const MoyasarPaymentForm: React.FC = () => {
  useEffect(() => {
    const initializeMoyasar = () => {
      if (typeof Moyasar !== 'undefined') {
        Moyasar.init({
          element: '.mysr-form',
          amount: 1000, // Amount in the smallest currency unit
          currency: 'SAR',
          description: 'Coffee Order #1',
          publishable_api_key: 'pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui',
          callback_url: 'https://moyasar.com/thanks',
          methods: ['creditcard'],
          fixed_width: false, // Optional, for demo purposes
          on_initiating: () => {
            return new Promise((_, reject) => {
              setTimeout(() => {
                reject("This is just a sample form, it won't work ;)");
              }, 2000);
            });
          },
        });
      }
    };

    // Load Moyasar script dynamically if not already included
    // @ts-ignore
    if (!window.Moyasar) {
      const script = document.createElement('script');
      script.src = 'https://cdn.moyasar.com/mpf/1.7.3/moyasar.js';
      script.onload = initializeMoyasar;
      document.body.appendChild(script);
    } else {
      initializeMoyasar();
    }
  }, []);

  return (
    <section className="flex w-full m-10">
      <div className="mysr-form" style={{ width: '360px' }}></div>
    </section>
  );
};

export default MoyasarPaymentForm;
