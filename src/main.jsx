import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsPage from './components/EventsPage/EventsPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import PastEventDetails from './components/PastEventDetails/PastEventDetails';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // The path for the EventsPage component
        element: <EventsPage />
      },
      {
        path: 'registrationPage',
        element: <RegistrationPage/>
      },
      {
        path: 'pastEventDetails',
        element:<PastEventDetails/>
      }
    ]
  }
]);

// Render the application with the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
