// src/Chatbot.js
import React, { useState } from 'react';

function Chatbot() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: 'user' }]);
        // Here you would send the message to your chatbot backend and handle the response
        // For now, let's just simulate a response after a short delay
        setTimeout(() => {
            setMessages([...messages, { text: 'Hello, how can I help you?', sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <strong>{message.sender === 'user' ? 'You' : 'Chatbot'}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Type your message..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim() !== '') {
                        handleSendMessage(e.target.value);
                        e.target.value = '';
                    }
                }}
                style={{ marginTop: '10px', width: '100%', padding: '5px' }}
            />
        </div>
    );
}

export default Chatbot;
