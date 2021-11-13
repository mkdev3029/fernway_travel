import "../components/styles/profile.css";
import Navbar from "../components/Navbar/Navbar";

const Profile = () => {
  return (
    <>
      <div className="profile-banner_mk">
        <svg
          width="414"
          height="268"
          viewBox="0 0 414 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-11.5 59.1392L-24 227.639L459 267.639L472.5 178.139C472.5 178.139 452.831 146.833 446.5 147.863C446.5 147.863 491.526 179.183 462.5 162.139L438.5 111.639L446.5 99.1392C446.5 99.1392 350 -9.86084 320.573 0.723877C291.146 11.3086 265.5 94.6392 265.5 94.6392L213.5 63.0374C213.5 63.0374 141.5 20.1392 122 16.1392C102.5 12.1392 -11.5 59.1392 -11.5 59.1392Z"
            fill="url(#paint0_linear_294_4986)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_294_4986"
              x1="-24"
              y1="133.82"
              x2="472.497"
              y2="133.82"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.263314" stopColor="#1A8279" />
              <stop offset="1" stopColor="#629984" stopOpacity="0.16" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="settings_mk">
        <h3 className="head1_mk">Basic Details</h3>
        <div className="basic-details-settings_mk">
          <div className="basic-details-settings-items_mk">
            <div className="bds-items_mk">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.02 2.91003C8.71 2.91003 6.02 5.60003 6.02 8.91003V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.9 21.1801C9.36 20.6401 9.02 19.8801 9.02 19.0601"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
              <p className="bds-para_mk">Notification </p>
            </div>
            <svg
              width="8"
              height="14"
              className="flt1_mk"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="basic-details-settings-items_mk">
            <div className="bds-items_mk">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3333 14.2H12.6667"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10.9467V17.6133"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.4267 2.66663H9.57336C6.73336 2.66663 4.4267 4.98663 4.4267 7.81329V26.6C4.4267 29 6.1467 30.0133 8.25336 28.8533L14.76 25.24C15.4534 24.8533 16.5734 24.8533 17.2534 25.24L23.76 28.8533C25.8667 30.0266 27.5867 29.0133 27.5867 26.6V7.81329C27.5734 4.98663 25.2667 2.66663 22.4267 2.66663Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="bds-para_mk">Saved Places</p>
            </div>
            <svg
              width="8"
              height="14"
              className="flt2"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="basic-details-settings-items_mk">
            <div className="bds-items_mk">
              <svg
                width="24"
                height="24"
                className="safe"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 21.25H21V15C21 10.03 16.97 6 12 6C7.03 6 3 10.03 3 15V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z"
                  fill="#292D32"
                />
                <path
                  d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z"
                  fill="#292D32"
                />
                <path
                  d="M5 5.75006C4.81 5.75006 4.62 5.68006 4.47 5.53006L3.47 4.53006C3.18 4.24006 3.18 3.76006 3.47 3.47006C3.76 3.18006 4.24 3.18006 4.53 3.47006L5.53 4.47006C5.82 4.76006 5.82 5.24006 5.53 5.53006C5.38 5.68006 5.19 5.75006 5 5.75006Z"
                  fill="#292D32"
                />
                <path
                  d="M19 5.75006C18.81 5.75006 18.62 5.68006 18.47 5.53006C18.18 5.24006 18.18 4.76006 18.47 4.47006L19.47 3.47006C19.76 3.18006 20.24 3.18006 20.53 3.47006C20.82 3.76006 20.82 4.24006 20.53 4.53006L19.53 5.53006C19.38 5.68006 19.19 5.75006 19 5.75006Z"
                  fill="#292D32"
                />
              </svg>
              <p className="bds-para_mk">Safety Guidelines</p>
            </div>
            <svg
              width="8"
              height="14"
              className="flt3"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h3 className="head1_mk">Bookings</h3>
        <div className="basic-details-settings_mk">
          <div className="basic-details-settings-items_mk">
            <div className="bds-items_mk">
              <svg
                width="24"
                height="24"
                className="hostel"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 22H22"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 16.5H10"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 16.5H17"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12H10"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 12H17"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7.5H10"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.5H17"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="p4">Your Bookings</p>
            </div>
            <svg
              width="8"
              height="14"
              className="flt4"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="basic-details-settings-items_mk">
            <p className="head2_mk">About</p>
            <svg
              width="8"
              height="14"
              className="flt4"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="basic-details-settings-items_mk">
            <p className="head2_mk">Privacy Policy</p>
            <svg
              width="8"
              height="14"
              className="flt4"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="basic-details-settings-items_mk">
            <p className="head2_mk">Terms of use</p>
            <svg
              width="8"
              height="14"
              className="flt4"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68237 12.9401L6.57237 8.05006C7.14987 7.47256 7.14987 6.52756 6.57237 5.95006L1.68237 1.06006"
                stroke="#807F7F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="head2_mk logout_mk">Log Out</p>
      </div>
      <Navbar />
    </>
  );
};

export default Profile;
