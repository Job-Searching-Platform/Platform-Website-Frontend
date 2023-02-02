import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { UserProfile as ReduxProfile } from "../../store/features/UserProfileSlice";
import Request from "../../utils/API-routers";
import axios from "axios";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import ButtonNoLink from "../../components/ButtonNoLink";
import Loader from "../../components/Loader";
import ErrorBar from "../../components/ErrorBar";

const ProfileUpload = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [,] = useState({
    user: null,
    _id: null,
    country: "",
    city: "",
    phoneNumber: "",
    website: "",
    linkedin: "",
    github: "",
    photo:
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    achievement: "",
    bio: "",
    skills: [],
    opentoRoles: [],
    primaryRole: "",
    yearofExperience: "",
    resume: "",
    education: [],
    experience: [],
  });
  // this err is used to for form auth and input checks
  const [err, setErr] = useState(false);
  // const location = useLocation();

  // edit data is received from the store and is used to get the data of the card that is being edited.
  const UserProfile = useSelector((state) => state.UserProfile);
  const dispatch = useDispatch();
  // data is content of the uploader inputs.
  const [data, setData] = useState(UserProfile);

  // onChange is a function that is used to update the data in the state. It is called when the user changes the input field.
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePhoto = (event) => {
    setLoad(true);

    // const name = location.pathname.split("/")[1].toLocaleLowerCase();
    // console.log(event.target.files[0]);
    // console.log(event.target.files[0].type);
    if (event.target.files[0].type.includes("image")) {
      Request.AWS_Link("research")
        .then((res) => {
          axios
            .put(res.data.url, event.target.files[0], {
              headers: {
                "Content-type": event.target.files[0].type,
              },
            })
            .then((res) => {
              console.log(res.request.responseURL.substr(0, 108));
              setData((prev) => ({
                ...prev,
                img:
                  res.request.responseURL.substr(0, 108) ||
                  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
              }));

              setLoad(false);
            });
        })
        .catch((error) => {
          setError(error.response.data.error);
          setLoad(false);
        });
    }

    if (event.target.files[0].type === "application/pdf") {
      console.log(event.target.files[0]);
      console.log(event.target.files[0].type);
      Request.AWS_PDF_Link("research")
        .then((res) => {
          axios
            .put(res.data.url, event.target.files[0], {
              headers: {
                "Content-type": event.target.files[0].type,
              },
            })
            .then((res) => {
              console.log(res.request.responseURL.substr(0, 106));
              setData((prev) => ({
                ...prev,
                pdf: res.request.responseURL.substr(0, 106) || "",
              }));

              setLoad(false);
            });
        })
        .catch((error) => {
          setError(error.response.data.error);
          setLoad(false);
        });
    }
  };

  // onSubmit is a function that is used to submit the data to the store. It is called when the user clicks the submit button.
  const onSubmitHandler = (e) => {
    if (
      data.title === "" ||
      data.shortDesc === "" ||
      data.date === "" ||
      data.producer === "" ||
      // data.description === "" ||
      data.category === ""
    ) {
      setErr(true);
      return;
    }
    setLoad(true);
    // const name = location.pathname.split("/")[1].toLocaleLowerCase();
    UserProfile.id !== undefined
      ? Request.patchNews(data.id, data)
          .then((res) => {
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          })
      : Request.postNews(data)
          .then((res) => {
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });

    onCleanHandler();
  };

  // onClean is a function that is used to clean the data in the state. It is called when the user clicks the clean button.
  const onCleanHandler = () => {
    setData({
      title: "",
      producer: "",
      shortDesc: "",
      file: "",
      date: "",
      category: "",
      description: "",
      location: "",
    });

    dispatch(
      ReduxProfile({
        title: "",
        producer: "",
        shortDesc: "",
        file: "",
        date: "",
        category: "",
        description: "",
        location: "",
      })
    );
  };

  // to set the category for page opened uploader for

  return (
    <>
      {/* <Navbar /> */}
      <div className="m-auto p-5 md:w-[70vw] md:p-10 lg:w-[40vw]">
        <div className="mt-[20vh] text-center">
          <h2 className="py-5 text-2xl font-bold text-black md:text-4xl ">
            Content Uploader
          </h2>
          <p className="text-gray font-bold">
            Use the respective inputs for filling the correct info in each.
          </p>
        </div>
        {error && <ErrorBar setError={setError}>{error}</ErrorBar>}
        {load ? (
          <Loader />
        ) : (
          <div className="my-10 grid grid-cols-2 gap-4">
            {/* Files = Resume & Profile photo */}
            <input
              onChange={handlePhoto}
              required
              type="file"
              accept="image/*"
              name="photo"
              placeholder="file Uploader"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              onChange={handlePhoto}
              required
              type="file"
              accept="application/pdf"
              name="resume"
              placeholder="file Uploader"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />

            {/* Inputs */}
            <input
              type="text"
              name="country"
              value={data?.country}
              onChange={onChangeHandler}
              placeholder="Title"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="city"
              value={data?.city}
              onChange={onChangeHandler}
              placeholder="Short Description"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="phoneNumber"
              value={data?.phoneNumber}
              onChange={onChangeHandler}
              placeholder="producer"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />

            <input
              type="text"
              name="website"
              value={data?.website}
              onChange={onChangeHandler}
              placeholder="website"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="linkedin"
              value={data?.linkedin}
              onChange={onChangeHandler}
              placeholder="linkedin"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="github"
              value={data?.github}
              onChange={onChangeHandler}
              placeholder="github"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="achievement"
              value={data?.achievement}
              onChange={onChangeHandler}
              placeholder="achievement"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="bio"
              value={data?.bio}
              onChange={onChangeHandler}
              placeholder="bio"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />

            <input
              type="text"
              name="skills"
              value={data?.skills}
              onChange={onChangeHandler}
              placeholder="skills"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="opentoRoles"
              value={data?.opentoRoles}
              onChange={onChangeHandler}
              placeholder="opentoRoles"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="primaryRole"
              value={data?.primaryRole}
              onChange={onChangeHandler}
              placeholder="primaryRole"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <input
              type="text"
              name="yearofExperience"
              value={data?.yearofExperience}
              onChange={onChangeHandler}
              placeholder="yearofExperience"
              className={
                err
                  ? "rounded-xl border-2 border-red-500 px-2  py-3 md:p-4 md:text-xl"
                  : "rounded-xl border-2 border-secondary px-2  py-3 md:p-4 md:text-xl"
              }
            />
            <Experience />
            <Experience />
            <Experience />
            <div className="col-span-2 flex justify-center gap-5">
              <ButtonNoLink
                text="Clear"
                large={true}
                primary={true}
                onClick={onCleanHandler}
              />
              <ButtonNoLink
                text="Submit"
                large={true}
                primary={true}
                onClick={onSubmitHandler}
              />
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProfileUpload;

const Experience = () => {
  return <div>sdfasd</div>;
};
