import { v4 } from "uuid";

export default function Modal({
  name,
  lastName,
  email,
  url,
  submit,
  form,
  setData,
  theme
}) {
  const addCard = () => {
    if (
      name.current.value.trim().length < 1 ||
      lastName.current.value.trim().length < 1 ||
      email.current.value.trim().length < 1 ||
      url.current.value.trim().length < 1
    ) {
      console.log(null);
    } else {
      setData((prewData) => [
        ...prewData,
        {
          url: url.current.value,
          name: name.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          id: v4(),
        },
      ]);
    }
  };

  return (
    <div className="containerModal">
      <div className={!theme ? "modal" : 'light-modal'}>
        <form
          onSubmit={submit}
          action="/"
          className='modal__container'
          ref={form}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <h3 className="modalTitle">Tap Esc for close</h3>
            <button
              type="button"
              onClick={submit}
              style={{
                background: "transparent",
                width: "30px",
                height: "30px",
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
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
                    d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                    fill="#ededed"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                    fill="#ededed"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>
          <label>
            <span className="label">Name</span>
            <input required type="text" className="input" ref={name} />
          </label>
          <label>
            <span className="label">Last Name</span>
            <input required type="text" className="input" ref={lastName} />
          </label>
          <label>
            <span className="label">Email</span>
            <input required type="email" className="input" ref={email} />
          </label>
          <label>
            <span className="label">URL for image</span>
            <input required type="text" className="input" ref={url} />
          </label>
          <button className={!theme ? "submit" : "lightSubmit"} onClick={addCard}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
