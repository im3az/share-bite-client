import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className=" flex-col px-6 py-14 bg-[#A6E2EC]  lg:flex lg:px-10 xl:px-24">
        {/* <!-- TOP CONTAINER --> */}
        <div className="lg:flex lg:flex-row lg:justify-between">
          {/* <!-- LOGO DIV --> */}
          <div>
            {/* <!-- LOGO --> */}
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  className="h-14 "
                  src="https://i.ibb.co/Ttrsqh8/cutlery-3170733-1.png"
                  alt=""
                />
              </Link>
              <h2 className="text-3xl font-semibold">
                <span className="text-[#337d8b]">Share</span>
                <span className="text-[#F017B8]">Bite</span>
              </h2>
            </div>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-800">
              ShareBite reduces food waste and hunger by connecting food donors
              and recipients. Join us, share or receive food, and make every
              bite count!
            </p>
            {/* <!-- SOCIAL MEDIA ICONS --> */}
            <div className="mb-8 mt-6 flex flex-row">
              <a
                href=""
                className="mr-4 text-black transition hover:text-gray-400"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25C9.4791 2.25005 7.05619 3.22647 5.23968 4.97439C3.42317 6.72231 2.35426 9.10586 2.25723 11.6249C2.1602 14.1439 3.0426 16.6026 4.71928 18.4851C6.39595 20.3676 8.73657 21.5275 11.25 21.7214V14.2501H9C8.80109 14.2501 8.61032 14.1711 8.46967 14.0304C8.32902 13.8898 8.25 13.699 8.25 13.5001C8.25 13.3012 8.32902 13.1104 8.46967 12.9698C8.61032 12.8291 8.80109 12.7501 9 12.7501H11.25V10.5001C11.2509 9.70472 11.5673 8.94218 12.1297 8.37977C12.6921 7.81736 13.4546 7.501 14.25 7.50009H15.75C15.9489 7.50009 16.1397 7.57911 16.2803 7.71976C16.421 7.86041 16.5 8.05118 16.5 8.25009C16.5 8.449 16.421 8.63977 16.2803 8.78042C16.1397 8.92107 15.9489 9.00009 15.75 9.00009H14.25C13.8523 9.00054 13.471 9.15872 13.1898 9.43993C12.9086 9.72114 12.7505 10.1024 12.75 10.5001V12.7501H15C15.1989 12.7501 15.3897 12.8291 15.5303 12.9698C15.671 13.1104 15.75 13.3012 15.75 13.5001C15.75 13.699 15.671 13.8898 15.5303 14.0304C15.3897 14.1711 15.1989 14.2501 15 14.2501H12.75V21.7214C15.2634 21.5275 17.604 20.3676 19.2807 18.4851C20.9574 16.6026 21.8398 14.1439 21.7427 11.6249C21.6457 9.10587 20.5768 6.72232 18.7603 4.9744C16.9438 3.22649 14.5209 2.25006 12 2.25Z"></path>
                </svg>
              </a>
              <a
                href=""
                className="mx-4 text-black transition hover:text-gray-400"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
                  <path d="M16.125 2.625H7.875C6.4831 2.62658 5.14865 3.18021 4.16443 4.16443C3.18021 5.14865 2.62658 6.4831 2.625 7.875V16.125C2.62658 17.5169 3.18021 18.8513 4.16443 19.8356C5.14865 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14865 19.8356 4.16443C18.8513 3.18021 17.5169 2.62658 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4987 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4987 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z"></path>
                </svg>
              </a>

              <a
                href=""
                className="mx-4 text-black transition hover:text-gray-400"
              >
                <svg
                  className="fill-current"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.9883 7.58391L21.0426 10.5297C20.4545 17.354 14.6994 22.6565 7.81089 22.6565C6.39249 22.6565 5.22357 22.4316 4.33651 21.9881C3.62063 21.6301 3.32738 21.246 3.25461 21.1367C3.18933 21.0388 3.14702 20.9274 3.13083 20.8108C3.11464 20.6943 3.12499 20.5755 3.16112 20.4635C3.19724 20.3515 3.2582 20.2491 3.33945 20.164C3.42069 20.0789 3.52012 20.0132 3.63031 19.9718C3.65544 19.9624 5.95923 19.0775 7.44821 17.3929C6.52206 16.7334 5.70694 15.9305 5.0335 15.0145C3.69483 13.1977 2.27901 10.0427 3.13598 5.32923C3.16148 5.18895 3.22489 5.05833 3.31932 4.95152C3.41376 4.8447 3.53562 4.76577 3.67171 4.72326C3.8078 4.68075 3.95293 4.67629 4.09137 4.71037C4.22981 4.74445 4.35629 4.81575 4.4571 4.91657C4.49153 4.9509 7.74246 8.15592 11.7166 9.19118L11.7171 8.59361C11.7256 7.34276 12.2303 6.14644 13.1204 5.26759C14.0105 4.38874 15.2132 3.89929 16.4641 3.90682C17.2766 3.91808 18.0724 4.1399 18.7737 4.55063C19.4749 4.96136 20.0576 5.54694 20.4649 6.25019L23.4359 6.25024C23.5904 6.25024 23.7414 6.29606 23.8699 6.3819C23.9984 6.46774 24.0985 6.58975 24.1577 6.73251C24.2168 6.87526 24.2323 7.03234 24.2021 7.18389C24.172 7.33543 24.0976 7.47464 23.9883 7.58391Z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- FOOTER LINKS --> */}
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            {/* <!-- LINK BLOCK --> */}
            <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter font-medium text-black">About Us</h2>
              <a href="" className="font-inter font-light text-gray-800">
                Vision
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Principles
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Principles
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Team
              </a>
            </div>
            {/* <!-- LINK BLOCK --> */}
            <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter font-medium text-black">Fundraising</h2>
              <a href="" className="font-inter font-light text-gray-800">
                Donate
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                circle of friends
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Self-service
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                transparency
              </a>
            </div>
            {/* <!-- LINK BLOCK --> */}
            <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter font-medium text-black">COMPANY</h2>
              <a href="" className="font-inter font-light text-gray-800">
                ESF+ Food Support
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                News
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Partner with Us
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Community Foodlink
              </a>
              <a href="" className="font-inter font-light text-gray-800">
                Food Safety
              </a>
            </div>
          </div>
          {/* <!-- LOCATION & SUPPORT --> */}
          <div className="mt-10 flex flex-col lg:mt-0">
            {/* <!-- ITEM --> */}
            <div className="mb-4 flex flex-row items-center">
              <svg
                className="flex-none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="black"></circle>
                <path
                  d="M26.6211 14.45C25.5711 9.83 21.5411 7.75 18.0011 7.75C18.0011 7.75 18.0011 7.75 17.9911 7.75C14.4611 7.75 10.4211 9.82 9.37107 14.44C8.20107 19.6 11.3611 23.97 14.2211 26.72C15.2811 27.74 16.6411 28.25 18.0011 28.25C19.3611 28.25 20.7211 27.74 21.7711 26.72C24.6311 23.97 27.7911 19.61 26.6211 14.45ZM18.0011 19.46C16.2611 19.46 14.8511 18.05 14.8511 16.31C14.8511 14.57 16.2611 13.16 18.0011 13.16C19.7411 13.16 21.1511 14.57 21.1511 16.31C21.1511 18.05 19.7411 19.46 18.0011 19.46Z"
                  fill="white"
                ></path>
              </svg>
              <p className="font-inter ml-4 text-black">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            {/* <!-- ITEM --> */}
            <div className="mb-4 flex flex-row items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="black"></circle>
                <path
                  d="M23 9.5H13C10 9.5 8 11 8 14.5V21.5C8 25 10 26.5 13 26.5H23C26 26.5 28 25 28 21.5V14.5C28 11 26 9.5 23 9.5ZM23.47 15.59L20.34 18.09C19.68 18.62 18.84 18.88 18 18.88C17.16 18.88 16.31 18.62 15.66 18.09L12.53 15.59C12.21 15.33 12.16 14.85 12.41 14.53C12.67 14.21 13.14 14.15 13.46 14.41L16.59 16.91C17.35 17.52 18.64 17.52 19.4 16.91L22.53 14.41C22.85 14.15 23.33 14.2 23.58 14.53C23.84 14.85 23.79 15.33 23.47 15.59Z"
                  fill="white"
                ></path>
              </svg>
              <p className="font-inter ml-4 text-black">
                support@shareBite.xyz
              </p>
            </div>
          </div>
        </div>
        {/* <!-- DIVIDER --> */}
        <div className="mx-auto my-6 w-full border border-[#E4E4E7] lg:my-9"></div>
        {/* <!-- COPYRIGHT TEXT --> */}
        <div>
          <p className="font-inter text-center text-sm text-gray-800 lg:mt-0">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
