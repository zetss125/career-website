"use client";

import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: "System online. I am Rawad's Digital Twin. Ask me about his career, skills, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages.filter(m => m.role !== 'system'), userMessage] })
      });

      const data = await response.json();
      if (data.message) {
        setMessages(prev => [...prev, data.message]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Please try again later." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "System failure. Could not reach server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window glass-panel">
          <div className="chat-header">
            <span className="gradient-text" style={{ fontWeight: 'bold' }}>RAN_Digital_Twin</span>
            <button onClick={toggleChat} className="close-btn">&times;</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <span className="typing-indicator">...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="chat-input-area">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..." 
              className="chat-input"
            />
            <button type="submit" className="chat-submit" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
      {!isOpen && (
        <button onClick={toggleChat} className="chat-toggle btn btn-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
