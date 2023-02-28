import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const RecruiterCandidateChat = ({ recruiterId }) => {
  const { jobId, selectedCandidate } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState({ messages: [] });

  // Connect to the server's Socket.io instance
  const socket = io.connect(process.env.REACT_APP_SOCKET_URL);

  useEffect(() => {
    if (!socket) {
      return;
    }
    // Join the room for this specific chat
    socket.emit(
      "join-room",
      `job-${jobId}-candidate-${selectedCandidate}-recruiter-${recruiterId}`
    );

    // Listen for new messages
    // const handleIncomingMessage = (data) => {
    //   if (data.sender === selectedCandidate._id) {
    //     setMessages([...messages, data]);
    //   }
    // };

    // socket.on('message', handleIncomingMessage);
    
    socket.on("new-message", (newChat) => {
      setChat((prevMessages) => [...prevMessages, newChat]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      // socket.emit("leave", { jobId });
      // socket.off("chat");
      // socket.emit('leave', { chatId: `${jobId}-${selectedCandidate}-${recruiterId}` });
      socket.disconnect();
    };
  }, [selectedCandidate, jobId, recruiterId, socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== "") {
      // Send the message to the server
      // socket.emit("message", { jobId, message });
      socket.emit("new-message", {
        chatId: `${jobId}-${selectedCandidate}-${recruiterId}`,
        sender: recruiterId,
        text: newMessage,
      });
      setChat((messages) => [
        ...messages,
        {
          sender: recruiterId,
          receiver: selectedCandidate._id,
          job: jobId,
          message: newMessage,
          timestamp: Date.now(),
        },
      ]);
      fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          jobId,
          selectedCandidate,
          recruiterId,
          newMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Clear the input field
      setNewMessage("");
    }
  };

  if (!chat) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {chat.messages.map((message) => (
        <div key={message._id}>
          <p>
            {message.sender === recruiterId ? "You" : "Candidate"}:{" "}
            {message.text}
          </p>
        </div>
      ))}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RecruiterCandidateChat;
