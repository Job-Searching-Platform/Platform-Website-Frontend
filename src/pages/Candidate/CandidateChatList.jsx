import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
// const socket = io(process.env.REACT_APP_SOCKET_URL);

function CandidateChatList() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Get list of jobs that candidate applied to
    fetch("/api/candidate/jobs")
      .then((res) => res.json())
      .then((data) => setChats(data));
  }, []);

  function handleJoinChat(jobId) {
    // Join chat with recruiter for the selected job
    socket.emit("join", { jobId });
  }

  return (
    <div>
      <h1>List of Jobs Applied</h1>
      {chats.length > 0 ? (
        <ul>
          {chats.map((chat) => (
            <li key={chat._id}>
              <Link
                to={`/jobs/${chat.job}/chats/${chat._id}`}
                onClick={() => handleJoinChat(chat._id)}
              >
                Job: {chat.job}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No chats found.</p>
      )}
    </div>
  );
}

export default CandidateChatList;
