import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
// const socket = io(process.env.REACT_APP_SOCKET_URL);

const RecruiterChatList = ({ jobId }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Get all candidates for the particular job
    fetch(`/api/v1/job/${jobId}/applied-jobs`)
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
      });
  }, [jobId]);

  function handleJoinChat(jobId) {
    // Join chat with recruiter for the selected job
    // TODO: fetch all chats for particular chat using:  "api/v1/candidates/:candidateID/:jobID/chat" 
    socket.emit("join", { jobId });
  }

  return (
    <>
      <div>
        <div>
          {chats.length > 0 ? (
            <ul>
              {chats.map((chat) => (
                <li key={chat._id}>
                  <Link
                    to={`/recruiter/jobs/${jobId}/chat/${chat._id}`}
                    key={chat._id}
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
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RecruiterChatList;
