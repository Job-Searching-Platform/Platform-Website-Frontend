import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

// const socket = io(process.env.REACT_APP_SOCKET_URL);

function CandidateChat({ match }) {
  const jobId = match.params.jobId;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get chat messages for the selected job
    fetch(`/api/candidate/chat/${jobId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));

    // Join chat with recruiter for the selected job
    socket.emit("join", { jobId });

    // Listen for new messages from the server
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up function to leave chat when component unmounts
    return () => {
      // socket.disconnect();
      // socket.off("chat");
      // socket.emit('leave', { chatId: `${jobId}-${candidateId}-${recruiterId}` });
      socket.emit("leave", { jobId });
    };
  }, [jobId]);

  function handleSendMessage(e) {
    e.preventDefault();

    if (message.trim() !== "") {
      // Send message to recruiter for the selected job
      socket.emit("message", { jobId, message });
      setMessage("");
    }
  }

  if (!setMessages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat with Recruiter</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default CandidateChat;
