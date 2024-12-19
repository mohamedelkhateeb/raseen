import { initializeApp } from 'firebase/app';

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
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
