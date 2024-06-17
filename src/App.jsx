import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import { v4 } from "uuid";

export default function App() {
  const name = useRef();
  const lastName = useRef();
  const email = useRef();
  const URL = useRef();
  const form = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme === true) {
      document.body.style.background = "white";
    }else{
      document.body.style.background = "#141313";
    }
    console.log(theme);
  }, [theme]);

  const lightMode = () => {
    setTheme(!theme);
  };

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const [data, setData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
    form.current.reset();
  };

  window.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      setModalIsOpen(false);
    }
  });

  return (
    <>
      <header>
        <div className="header__container">
          <a href="#" className={!theme ? `header__logo`: "light-header__logo"}>
            CUser.com
          </a>

          <button className="themeMode" onClick={lightMode}>
            <svg
              style={
                !theme
                  ? {
                      position: "absolute",
                      width: "100%",
                      opacity: "0",
                      transition: "all .3s",
                    }
                  : {
                      position: "absolute",
                      transition: "all 0.3s",
                      width: "100%",
                      opacity: "1",
                    }
              }
              version={1.0}
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <circle
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    cx="32.003"
                    cy="32.005"
                    r="16.001"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#231F20"
                    d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"
                  />{" "}
                </g>{" "}
              </g>
            </svg>

            <svg
              style={
                theme
                  ? {
                      position: "absolute",
                      width: "100%",
                      opacity: "0",
                      transition: "all .3s",
                    }
                  : {
                      position: "absolute",
                      transition: "all 0.3s",
                      width: "100%",
                      opacity: "1",
                    }
              }
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3655 2.12433C20.0384 1.29189 18.8624 1.29189 18.5353 2.12433L18.1073 3.21354L17.0227 3.6429C16.1933 3.97121 16.1933 5.14713 17.0227 5.47544L18.1073 5.90481L18.5353 6.99401C18.8624 7.82645 20.0384 7.82646 20.3655 6.99402L20.7935 5.90481L21.8781 5.47544C22.7075 5.14714 22.7075 3.97121 21.8781 3.6429L20.7935 3.21354L20.3655 2.12433ZM19.4504 2.52989L19.8651 3.58533C19.9648 3.83891 20.165 4.04027 20.4188 4.14073L21.4759 4.55917L20.4188 4.97762C20.165 5.07808 19.9648 5.27943 19.8651 5.53301L19.4504 6.58846L19.0357 5.53301C18.936 5.27943 18.7358 5.07808 18.482 4.97762L17.4249 4.55917L18.482 4.14073C18.7358 4.04027 18.936 3.83891 19.0357 3.58533L19.4504 2.52989ZM16.4981 7.94681C16.171 7.11437 14.9951 7.11437 14.668 7.94681L14.5134 8.34008L14.1222 8.49497C13.2928 8.82328 13.2928 9.9992 14.1222 10.3275L14.5134 10.4824L14.668 10.8757C14.9951 11.7081 16.171 11.7081 16.4981 10.8757L16.6526 10.4824L17.0439 10.3275C17.8733 9.9992 17.8733 8.82328 17.0439 8.49497L16.6526 8.34008L16.4981 7.94681ZM15.583 8.35237L15.7243 8.71188C15.824 8.96545 16.0242 9.16681 16.278 9.26727L16.6417 9.41124L16.278 9.55521C16.0242 9.65567 15.824 9.85703 15.7243 10.1106L15.583 10.4701L15.4418 10.1106C15.3421 9.85703 15.1419 9.65567 14.8881 9.55521L14.5244 9.41124L14.8881 9.26727C15.1419 9.16681 15.3421 8.96545 15.4418 8.71188L15.583 8.35237Z"
                  fill="#ffffff"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                  fill="#ffffff"
                />{" "}
              </g>
            </svg>
          </button>

          <span className="usersCounter">
            {data.length < 1
              ? "You don't have users now :("
              : `You have ${data.length} user`}
          </span>
        </div>
      </header>
      <section className={!theme ? "usersSection" : 'light-bg'} style={{minHeight: '70vh'}}>
        <div className="users__container">
          <button onClick={openModal} className={!theme? "auserAddBtn" : "lightBtn"}>
            New user
          </button>
          <div className="usersBox">
            {data.length <= 0 ? (
              <h1 style={theme ? {color: 'black', opacity: '0.3'} : {}}>NO UserS :(</h1>
            ) : (
              data.map((dataItem) => {
                return (
                  <div title="Double tap for delete" onDoubleClick={() => {setData(data.filter(filteredData => filteredData.id !== dataItem.id))}} className="card" style={theme ? {background: 'white', color: 'black'} : {}} key={dataItem.id}>
                    <img className="cardImg" src={dataItem.url} alt="img" />
                    <div>
                      <h3>Name: {dataItem.name}</h3>
                      <h3>Last Name: {dataItem.lastName}</h3>
                      <h3>Email: {dataItem.email}</h3>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      <footer>
        <h2 className="footerTitle" style={theme ? {color: 'black'} : {}}>
          Developer: Islomjon Kamolov © copyright 2024
        </h2>
      </footer>
      <marquee className="marquee">React jsx Amaliyot</marquee>
      {modalIsOpen && (
        <Modal
          name={name}
          lastName={lastName}
          email={email}
          url={URL}
          submit={submit}
          form={form}
          setData={setData}
          theme={theme}
        />
      )}
      {/* test */}
    </>
  );
}
