import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import '../styles/notification.scss';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated fetch
    const fakeNotifications = [
      { id: 1, message: 'User123 liked your tweet.' },
      { id: 2, message: 'New follower: DevDude.' },
      { id: 3, message: 'Tweet replied by Rec cant?.' },
    ];
    setNotifications(fakeNotifications);
  }, []);

  return (
    <Layout>
      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((note) => (
            <li key={note.id}>{note.message}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Notification;
