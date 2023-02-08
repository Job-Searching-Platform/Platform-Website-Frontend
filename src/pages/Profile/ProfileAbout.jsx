import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    title: "Gmail",
    text: "baistan.tashkulov@gmail.com",
    link: "mailto: baistan.tashkulov@gmail.com",
  },
  {
    id: 1,
    title: "Phone / WhatsApp",
    text: "+996 (771)-390-338",
    link: "https://wa.me/+996771390338",
  },
  {
    id: 2,
    title: "Instagram",
    text: "Watts.en",
    link: "https://www.instagram.com/watts.en/",
  },
];

const ProfileAbout = () => {
  return (
    <>
      <h1 className="mb-5 text-2xl font-semibold tracking-wide">About</h1>
      <p>Let's start a project together</p>
      <br />
      <ul className="list-square">
        {data.map((x) => (
          <li key={x.id} className="mb-2 text-sm">
            <b>{x.title}: </b>
            <Link
              to={x.link}
              className="underline"
              rel="noreferrer"
              target="_blank"
            >
              {x.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileAbout;
