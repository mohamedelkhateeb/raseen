'use client';
import React, { useEffect } from 'react';
import { getMessaging, onMessage } from 'firebase/messaging';
import useFcmToken from '@/hooks/use-fcm-token';
import firebaseApp from './firebase';
import toast from 'react-hot-toast';

export default function FirebaseNotify() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  console.log('FCM token:', fcmToken);
  console.log('notificationPermissionStatus:', notificationPermissionStatus);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className="w-0 flex-1 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
                  <p className="mt-1 text-sm text-gray-500">Sure! 8:30pm works great!</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

  return <> </>;
}
