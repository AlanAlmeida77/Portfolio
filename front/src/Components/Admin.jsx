import { useState, useEffect } from 'react';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Al cargar el componente, obtén los mensajes desde la API
    fetch('http://localhost:3001/crud/get-messages')
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
        setError('Error fetching messages');
      });
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez al montar el componente

  const renderMessages = () => {
    if (loading) {
      return <p className="text-gray-700">Loading...</p>;
    }

    if (error) {
      return <p className="text-red-500 mb-4 font-semibold">{error}</p>;
    }

    if (messages.length === 0) {
      return <p className="text-gray-700">No messages available.</p>;
    }

    return (
      <ul className="list-disc list-inside">
        {messages.map((message) => (
          <li key={message.id} className="mb-4">
            <div className="bg-slate-800 p-4 rounded-lg shadow-md">
              <strong className="text-fuchsia-500">{message.name}</strong> ({message.email}): {message.content}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id="Admin" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Admin Panel
      </h1>
      {renderMessages()}
    </div>
  );
};

export default Admin;
