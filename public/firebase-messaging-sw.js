// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyB7qHNVZ7wXksqlb0F_F0DdUwYgqldz2PQ',
  authDomain: 'raseen-f0cf1.firebaseapp.com',
  projectId: 'raseen-f0cf1',
  storageBucket: 'raseen-f0cf1.firebasestorage.app',
  messagingSenderId: '67432909496',
  appId: '1:67432909496:web:cdf13a2a45ba39ddc0024d',
  measurementId: 'G-KWWSLVPERZ',
  vapidKey: 'BABgj7dKU-bYCE8hWRhJ1ugaQhaQZ4NAqMDhPgjFdQcSfG0hWMEYm-bXeiGDNYrC_Li3DkOVllYvbF-pnrWEiow', // VAPID public key here
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
