import React from 'react';

const Notification = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
