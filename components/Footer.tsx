import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#1d1d1d] w-full h-screen text-[#f5f1eb] overflow-hidden">
      <div className="w-full h-3/5">
        <div className="w-full h-4/5  flex">
          <div className="h-full w-3/5  md:p-20 p-10 flex flex-col gap-10">
            <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-grotesqueBold tracking-wide  w-3/4">
              No question is too crazy.Ask them seven days a week.
            </h3>
            <div className="flex gap-4 md:flex-row flex-col">
                            <button className="bg-[#ff7955] hover:bg-[#ff5733] rounded-2xl flex justify-center items-center p-2 gap-3 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 4.00001C0 1.79087 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16.3571C20 16.4358 19.9977 16.514 19.9932 16.5916L19.9937 16.5914L19.987 22.9625L13.9584 20.3571H4C1.79086 20.3571 0 18.5663 0 16.3571V4.00001ZM2.88911 14.4172C3.06188 14.1972 3.38857 13.8661 3.91138 14.3466C4.43419 14.8271 6.99498 16.2516 10.045 16.2797C12.7375 16.3045 15.2216 15.0172 16.0589 14.5834C16.17 14.5258 16.2521 14.4832 16.3019 14.4608C16.3537 14.4374 16.401 14.415 16.4449 14.3943C16.7606 14.2452 16.8946 14.182 17.182 14.4481C17.5093 14.7511 17.4268 14.99 17.182 15.3216C16.9372 15.6531 14.026 17.4885 10.1054 17.4885C6.18489 17.4885 3.03398 15.6142 2.87836 15.3216C2.72275 15.0289 2.71635 14.6372 2.88911 14.4172Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="group-hover:text-white transition duration-300">Start live chat</span>
              </button>
              <div className="flex flex-col">
                <p className="font-[100]">Our usual response time</p>
                <p className="font-bold">Within 5 minutes</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="view">
                Would you like to stay informed about our new product releases?
              </p>
              <form action="" className="rounded-2xl xl:w-full w-1/4 flex">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  className="xl:p-4 p-2 rounded-l-2xl outline-none text-black"
                />
                <button className="bg-[#ff7955] hover:bg-[#ff5733] xl:p-4 rounded-r-2xl p-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="h-full w-2/5  xl:p-20 pt-10 pr-8 ">
            <ul className="flex flex-col gap-1  md:text-4xl text-2xl xl:text-left text-right  font-bold font-grotesqueBold w-full ">
              <Link href={"#"} className="hover:underline">Home</Link>
              <Link href={"#"} className="hover:underline">Local Pubs</Link>
              <Link href={"#"} className="hover:underline">Restaurants</Link>
              <Link href={"#"} className="hover:underline">Clubs</Link>
              <Link href={"#"} className="hover:underline">Grocery</Link>
              <Link href={"#"} className="hover:underline">Dine</Link>
              <Link href={"#"} className="hover:underline">Community</Link>
              <Link href={"#"} className="hover:underline">Reviews</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-2/5  flex justify-center items-center flex-col">
        <div className="w-full h-5/6 flex items-center justify-between xl:px-20 xl:py-20 px-8">
          <div className="w-1/4 h-full flex justify-center items-center">
            <ul className="flex flex-col text-xl text-[#b4b2ae] text-left justify-center">
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>Warranty</Link>
              <Link href={"#"}>Customer Service</Link>
              <Link href={"#"}>Return</Link>
            </ul>
          </div>
          <div>
            <ul className="payment-icon-list flex xl:gap-4 gap-2">
              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.8387 1H7.16129C3.74834 1 1 3.79383 1 7.21739V26.7826C1 30.2062 3.74834 33 7.16129 33H36.8387C40.2517 33 43 30.2062 43 26.7826V7.21739C43 3.79384 40.2517 1 36.8387 1Z"
                    fill="#E664A5"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12.625 9.98389V24.0565C12.625 24.742 13.1895 25.2661 13.8347 25.2661H22.2621C28.6331 25.2661 31.375 21.7178 31.375 17C31.375 12.2823 28.6331 8.73389 22.2621 8.73389H13.875C13.1895 8.77421 12.625 9.33872 12.625 9.98389Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.2703 12.2418V22.645H22.7864C26.8994 22.645 28.6735 20.3064 28.6735 17.0403C28.6735 13.8951 26.8994 11.4757 22.7864 11.4757H19.0364C18.6333 11.4354 18.2703 11.7983 18.2703 12.2418Z"
                    fill="#CC0066"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9637 24.1775H22.2621C27.4235 24.1775 30.246 21.6372 30.246 17.0405C30.246 14.3791 29.1976 9.90332 22.2621 9.90332H14.9637C14.3186 9.90332 13.7944 10.4275 13.7944 11.0727V23.0082C13.7944 23.6533 14.3186 24.1775 14.9637 24.1775ZM14.1977 11.0727C14.1977 10.6694 14.5202 10.3065 14.9637 10.3065L22.2621 10.2662C25.0847 10.2662 29.8429 11.1533 29.8429 17.0001C29.8429 21.355 27.1412 23.7743 22.2621 23.7743H14.9637C14.5606 23.7743 14.1977 23.4517 14.1977 23.0082V11.0727Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3268 15.7097C20.2058 15.6695 20.0444 15.6291 19.8832 15.6291L18.7944 15.5889V18.0889H19.8832C20.0444 18.0889 20.2461 18.0889 20.3671 18.0082C20.5283 17.9275 20.6493 17.8469 20.7299 17.7259L20.7301 17.7256C20.8107 17.6048 20.8913 17.4839 20.9316 17.3227C20.9719 17.2017 21.0122 17.0405 21.0122 16.8389C21.0122 16.6372 20.9719 16.4759 20.9316 16.3146L20.6897 15.9517C20.5687 15.8307 20.4477 15.7501 20.3268 15.7097ZM20.0848 17.605C20.0042 17.6452 19.9236 17.6452 19.8429 17.6452L19.3591 17.6856V16.113H19.7622C19.8832 16.113 20.0042 16.113 20.0848 16.1534C20.1654 16.1936 20.2461 16.234 20.2864 16.3146C20.3133 16.3415 20.3402 16.4042 20.3671 16.4669C20.3805 16.4983 20.394 16.5297 20.4074 16.5566C20.4477 16.6372 20.4477 16.7582 20.4477 16.8791C20.4477 17.0405 20.4477 17.1614 20.4074 17.2421C20.4074 17.3227 20.3716 17.3675 20.3357 17.4124C20.3178 17.4347 20.2999 17.4571 20.2864 17.484C20.2461 17.5042 20.2159 17.5243 20.1856 17.5445C20.1554 17.5646 20.1251 17.5848 20.0848 17.605Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.2298 15.6291V16.0727H21.8992V16.6372H23.1088V17.0405H21.8992V17.6452H23.2298V18.0889H21.3347V15.5889L23.2298 15.6291Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.0122 18.1289L25.0847 15.6289H24.48L23.5525 18.1289H24.1171L24.3186 17.5644H25.2461L25.4477 18.1289H26.0122ZM24.8025 16.2338L25.1251 17.1613H24.48L24.8025 16.2338Z"
                    fill="white"
                  ></path>
                  <path
                    d="M26.8992 15.6291V17.6452H28.1088V18.0889H26.3347V15.5889C26.375 15.6291 26.8992 15.6291 26.8992 15.6291Z"
                    fill="white"
                  ></path>
                  <path
                    d="M16.2137 18.0081C16.8372 18.0081 17.3427 17.5026 17.3427 16.879C17.3427 16.2555 16.8372 15.75 16.2137 15.75C15.5902 15.75 15.0847 16.2555 15.0847 16.879C15.0847 17.5026 15.5902 18.0081 16.2137 18.0081Z"
                    fill="black"
                  ></path>
                  <path
                    d="M17.1008 22.6453C16.1331 22.6453 15.3669 21.8791 15.3669 20.9114V19.5404C15.3669 19.0566 15.7702 18.6533 16.2541 18.6533C16.7379 18.6533 17.1412 19.0566 17.1412 19.5404L17.1008 22.6453Z"
                    fill="black"
                  ></path>
                </svg>
              </li>

              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68628 33 7 33H37C40.3137 33 43 30.3137 43 27V7C43 3.68628 40.3137 1 37 1Z"
                    fill="#F4B6C7"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3125 23.5625H14.5V10.4375H17.3125V23.5625ZM17.8334 17.0278C20.3289 15.7987 21.9418 13.3155 21.9999 10.4386H24.954C24.9139 13.1702 23.7865 15.7042 21.8019 17.584L25.7499 23.5625H21.9999L17.8334 17.0278Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.75 21.6876C25.75 22.723 26.5895 23.5625 27.6251 23.5625C28.6605 23.5625 29.5 22.723 29.5 21.6876C29.5 20.652 28.6605 19.8125 27.6251 19.8125C26.5895 19.8125 25.75 20.652 25.75 21.6876Z"
                    fill="black"
                  ></path>
                </svg>
              </li>

              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.88 1H7.12C3.73246 1 1 3.76609 1 7.16129V26.8388C1 30.234 3.73247 33 7.12 33H36.88C40.2676 33 43 30.234 43 26.8388V7.16129C43 3.7661 40.2676 1 36.88 1Z"
                    fill="#0071C0"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M27.3031 13.0876C27.2896 13.1771 27.2743 13.2685 27.257 13.3624C26.6632 16.5346 24.6319 17.6304 22.0375 17.6304H20.7165C20.3992 17.6304 20.1319 17.8702 20.0824 18.1958L19.4061 22.6592L19.2146 23.9244C19.1824 24.1381 19.3408 24.3309 19.5482 24.3309H21.8911C22.1685 24.3309 22.4042 24.1212 22.4479 23.8364L22.4709 23.7126L22.912 20.7996L22.9404 20.6398C22.9836 20.3541 23.2197 20.1443 23.4972 20.1443H23.8476C26.1175 20.1443 27.8944 19.1853 28.4138 16.4102C28.6308 15.2509 28.5184 14.2829 27.9444 13.6021C27.7706 13.3968 27.5551 13.2265 27.3031 13.0876Z"
                    fill="#99C6E5"
                  ></path>
                  <path
                    d="M26.6818 12.8299C26.5911 12.8025 26.4975 12.7775 26.4015 12.755C26.305 12.733 26.2061 12.7135 26.1044 12.6966C25.7482 12.6366 25.358 12.6082 24.9399 12.6082H21.4109C21.324 12.6082 21.2415 12.6286 21.1676 12.6656C21.0048 12.747 20.8839 12.9073 20.8546 13.1036L20.1039 18.0515L20.0823 18.1958C20.1317 17.8702 20.3991 17.6304 20.7164 17.6304H22.0373C24.6317 17.6304 26.6631 16.5341 27.2568 13.3624C27.2746 13.2685 27.2895 13.1771 27.3029 13.0877C27.1527 13.0047 26.99 12.9338 26.8148 12.8734C26.7716 12.8584 26.7269 12.8439 26.6818 12.8299Z"
                    fill="#CCE2F2"
                  ></path>
                  <path
                    d="M20.8547 13.1036C20.884 12.9073 21.0049 12.7469 21.1677 12.666C21.2421 12.629 21.3241 12.6086 21.411 12.6086H24.94C25.3581 12.6086 25.7483 12.637 26.1045 12.697C26.2062 12.714 26.3051 12.7334 26.4016 12.7554C26.4976 12.7779 26.5912 12.8029 26.6819 12.8303C26.727 12.8443 26.7717 12.8588 26.8153 12.8733C26.9905 12.9337 27.1533 13.0052 27.3035 13.0876C27.4801 11.9153 27.3021 11.1171 26.6929 10.3944C26.0214 9.5987 24.8094 9.25806 23.2585 9.25806H18.7561C18.4393 9.25806 18.1691 9.49781 18.1201 9.82397L16.2448 22.1936C16.2078 22.4383 16.3893 22.6591 16.6264 22.6591H19.4061L20.104 18.0514L20.8547 13.1036Z"
                    fill="white"
                  ></path>
                </svg>
              </li>

              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68628 33 7 33H37C40.3137 33 43 30.3137 43 27V7C43 3.68628 40.3137 1 37 1Z"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <mask
                    id="mask0_607_3616"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="44"
                    height="34"
                  >
                    <path
                      d="M37 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68628 33 7 33H37C40.3137 33 43 30.3137 43 27V7C43 3.68628 40.3137 1 37 1Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_607_3616)">
                    <path
                      d="M37 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68628 33 7 33H37C40.3137 33 43 30.3137 43 27V7C43 3.68628 40.3137 1 37 1Z"
                      fill="url(#paint0_linear_607_3616)"
                      stroke="#B4B1AD"
                      strokeWidth="2"
                    ></path>
                    <path
                      opacity="0.1"
                      d="M48.875 88.25C70.6213 88.25 88.25 70.6213 88.25 48.875C88.25 27.1287 70.6213 9.5 48.875 9.5C27.1287 9.5 9.5 27.1287 9.5 48.875C9.5 70.6213 27.1287 88.25 48.875 88.25Z"
                      fill="url(#paint1_linear_607_3616)"
                    ></path>
                    <path
                      opacity="0.1"
                      d="M10.125 58.25C21.5159 58.25 30.75 49.0159 30.75 37.625C30.75 26.2341 21.5159 17 10.125 17C-1.26587 17 -10.5 26.2341 -10.5 37.625C-10.5 49.0159 -1.26587 58.25 10.125 58.25Z"
                      fill="url(#paint2_linear_607_3616)"
                    ></path>
                    <path
                      opacity="0.1"
                      d="M55.125 29.5C73.4194 29.5 88.25 14.6694 88.25 -3.625C88.25 -21.9194 73.4194 -36.75 55.125 -36.75C36.8306 -36.75 22 -21.9194 22 -3.625C22 14.6694 36.8306 29.5 55.125 29.5Z"
                      fill="url(#paint3_linear_607_3616)"
                    ></path>
                    <path
                      d="M14.5 10.75H8.25C7.55964 10.75 7 11.3096 7 12V15.75C7 16.4404 7.55964 17 8.25 17H14.5C15.1903 17 15.75 16.4404 15.75 15.75V12C15.75 11.3096 15.1903 10.75 14.5 10.75Z"
                      fill="black"
                    ></path>
                    <path
                      d="M14.5 10.75H8.25C7.55964 10.75 7 11.3096 7 12V15.75C7 16.4404 7.55964 17 8.25 17H14.5C15.1903 17 15.75 16.4404 15.75 15.75V12C15.75 11.3096 15.1903 10.75 14.5 10.75Z"
                      fill="url(#paint4_linear_607_3616)"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M9.5 12H8.25V15.75H9.5V12Z"
                      fill="#7A3802"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M12 12H10.75V15.75H12V12Z"
                      fill="#7A3802"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M14.5 12H13.25V15.75H14.5V12Z"
                      fill="#7A3802"
                    ></path>
                    <path
                      d="M13.25 20.75H7V22H13.25V20.75Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M10.75 23.25H7V24.5H10.75V23.25Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M15.75 23.25H12V24.5H15.75V23.25Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M20.75 23.25H17V24.5H20.75V23.25Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M20.75 20.75H14.5V22H20.75V20.75Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M28.25 20.75H22V22H28.25V20.75Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                    <path
                      d="M35.75 20.75H29.5V22H35.75V20.75Z"
                      fill="white"
                      fillOpacity="0.8"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_607_3616"
                      x1="1.99999"
                      y1="32"
                      x2="30.8"
                      y2="-6.39998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#060B0E"></stop>
                      <stop offset="1" stopColor="#254764"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_607_3616"
                      x1="31.2627"
                      y1="29.5623"
                      x2="27.2893"
                      y2="18.6761"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.01"></stop>
                      <stop offset="1" stopColor="white"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_607_3616"
                      x1="10.125"
                      y1="58.25"
                      x2="5.56406"
                      y2="39.9051"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.01"></stop>
                      <stop offset="1" stopColor="white"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_607_3616"
                      x1="47.7996"
                      y1="0.0370943"
                      x2="55.125"
                      y2="29.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.01"></stop>
                      <stop offset="1" stopColor="white"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_607_3616"
                      x1="11.375"
                      y1="10.75"
                      x2="11.375"
                      y2="17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FAD961"></stop>
                      <stop offset="1" stopColor="#F7955D"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </li>

              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.88 1.625H7.12C4.08267 1.625 1.625 4.10621 1.625 7.16129V26.8388C1.625 29.8938 4.08268 32.375 7.12 32.375H36.88C39.9173 32.375 42.375 29.8938 42.375 26.8388V7.16129C42.375 4.1062 39.9173 1.625 36.88 1.625Z"
                    fill="white"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M13.25 23.25C17.7705 23.25 19.7397 20.0138 22 17H7V23.25H13.25Z"
                    fill="url(#paint0_linear_607_3612)"
                  ></path>
                  <path
                    d="M30.75 10.75C26.2295 10.75 24.2603 13.9863 22 17H37V10.75H30.75Z"
                    fill="url(#paint1_linear_607_3612)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_607_3612"
                      x1="14.9249"
                      y1="22.3554"
                      x2="18.4559"
                      y2="14.8011"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#005AB9"></stop>
                      <stop offset="1" stopColor="#1E3764"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_607_3612"
                      x1="27.6782"
                      y1="19.7275"
                      x2="31.6814"
                      y2="11.8606"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FBA900"></stop>
                      <stop offset="1" stopColor="#FFD800"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </li>

              <li>
                <svg
                  className="payment-icon"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68628 33 7 33H37C40.3137 33 43 30.3137 43 27V7C43 3.68628 40.3137 1 37 1Z"
                    fill="#0F4CA1"
                    stroke="#F5F1EB"
                    strokeWidth="2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.9375 23.5625H25.75V18.921C26.2951 19.9379 27.489 20.3146 28.4984 20.3146C30.9825 20.3146 32.3125 18.215 32.3125 15.6887C32.3125 13.6224 31.0474 11.375 28.7393 11.375C27.4252 11.375 26.3268 11.9163 25.75 13.1138V11.375H22.9375V23.5625ZM29.3322 15.7547C29.3322 17.1165 28.675 18.051 27.5858 18.051C26.6239 18.051 25.8218 17.1165 25.8218 15.8693C25.8218 14.5902 26.5276 13.6386 27.5858 13.6386C28.7071 13.6386 29.3322 14.6223 29.3322 15.7547Z"
                    fill="#FFFFFE"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0625 11.5686H18.4135V13.0855H18.3817C17.7641 12.0529 16.7564 11.375 15.5057 11.375C12.8738 11.375 11.6875 13.247 11.6875 15.7493C11.6875 18.2362 13.1336 19.9781 15.4573 19.9781C16.627 19.9781 17.6017 19.5273 18.2998 18.5414H18.3328V18.9943C18.3328 20.6408 17.4233 21.4315 15.7333 21.4315C14.5146 21.4315 13.7672 21.1735 12.8738 20.7376L12.7272 23.0301C13.4099 23.2713 14.5636 23.5625 15.9607 23.5625C19.3728 23.5625 21.0625 22.4482 21.0625 18.9943V11.5686ZM14.7096 15.7006C14.7096 14.5549 15.2783 13.6026 16.367 13.6026C17.6827 13.6026 18.2354 14.6509 18.2354 15.5876C18.2354 16.8795 17.4064 17.751 16.367 17.751C15.4896 17.751 14.7096 17.0077 14.7096 15.7006Z"
                    fill="#FFFFFE"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-1/6  flex justify-around items-center text-[#b4b2ae]">
      <p>&copy; 2024 Local Pulse</p>
      <div className="social-sharing-wrapper flex justify-center items-center gap-5"><a className="social-sharing-icon facebook" rel="noopener" href="https://www.facebook.com/srfacewetsuits" title="Check out SRFACE / The Ultimate Wetsuit on Facebook">

<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.09932 0C1.38765 0 0 1.38758 0 3.0993V19.9006C0 21.6123 1.38759 22.9999 3.09932 22.9999H11.3856L11.3998 14.781H9.26448C8.98698 14.781 8.76176 14.5566 8.76069 14.2791L8.75045 11.6298C8.74938 11.3508 8.97528 11.124 9.2543 11.124H11.3857V8.56415C11.3857 5.59342 13.2001 3.97583 15.8502 3.97583H18.0248C18.3029 3.97583 18.5286 4.20139 18.5286 4.47967V6.71358C18.5286 6.99174 18.3031 7.21725 18.0251 7.21742L16.6905 7.21804C15.2493 7.21804 14.9702 7.90288 14.9702 8.90792V11.1241H18.1371C18.4388 11.1241 18.6729 11.3876 18.6374 11.6872L18.3234 14.3365C18.2933 14.5901 18.0783 14.7811 17.8231 14.7811H14.9844L14.9702 23H19.9007C21.6124 23 23 21.6124 23 19.9008V3.0993C22.9999 1.38758 21.6124 0 19.9006 0C11.5 0 3.09932 0 3.09932 0Z" fill="#B4B1AD"></path>
</svg>
</a><a className="social-sharing-icon instagram" rel="noopener" href="https://www.instagram.com/srface" title="Check out SRFACE / The Ultimate Wetsuit on Instagram">

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.4449 2.4941C15.7508 2.4941 16.1425 2.50705 17.4486 2.56591C18.6568 2.62005 19.3116 2.82016 19.7481 2.98731C20.3263 3.20979 20.7392 3.47581 21.1722 3.90428C21.6052 4.33393 21.8742 4.74238 22.0984 5.31446C22.2683 5.74646 22.4701 6.39505 22.5255 7.59099C22.5845 8.88346 22.5975 9.27072 22.5975 12.5443C22.5975 15.8178 22.5845 16.2063 22.5255 17.4987C22.4701 18.6935 22.2683 19.3433 22.0984 19.7753C21.8742 20.3473 21.6052 20.7558 21.1722 21.1843C20.7392 21.6139 20.3263 21.8799 19.7481 22.1024C19.3116 22.2695 18.6568 22.4697 17.4486 22.5238C16.1437 22.5827 15.752 22.5956 12.4449 22.5956C9.1378 22.5956 8.74609 22.5827 7.44 22.5238C6.23301 22.4697 5.57702 22.2695 5.14048 22.1024C4.56235 21.8799 4.14941 21.6139 3.7164 21.1843C3.2834 20.7558 3.01439 20.3473 2.79022 19.7753C2.62032 19.3433 2.41857 18.6935 2.3643 17.4987C2.30413 16.2063 2.29115 15.8178 2.29115 12.5443C2.29115 9.27072 2.30413 8.88346 2.3643 7.59099C2.41857 6.39505 2.62032 5.74646 2.79022 5.31446C3.01439 4.74238 3.2834 4.33393 3.7164 3.90428C4.14941 3.47581 4.56235 3.20979 5.14048 2.98731C5.57702 2.82016 6.23301 2.62005 7.44 2.56591C8.74609 2.50705 9.1378 2.4941 12.4449 2.4941ZM12.4449 0.284668C9.08116 0.284668 8.65996 0.298793 7.33853 0.358826C6.02064 0.418858 5.12042 0.62603 4.33228 0.928547C3.51819 1.24166 2.8268 1.66071 2.13895 2.34226C1.44992 3.0238 1.02635 3.7077 0.710154 4.51402C0.404574 5.29445 0.194561 6.18552 0.134389 7.48976C0.0742167 8.79753 0.0600586 9.2154 0.0600586 12.5443C0.0600586 15.8743 0.0742167 16.2922 0.134389 17.5988C0.194561 18.9042 0.404574 19.7953 0.710154 20.5757C1.02635 21.3808 1.44992 22.0647 2.13895 22.7463C2.8268 23.4278 3.51819 23.8469 4.33228 24.1612C5.12042 24.4637 6.02064 24.6709 7.33853 24.7309C8.65996 24.7897 9.08116 24.8039 12.4449 24.8039C15.8075 24.8039 16.2298 24.7897 17.5501 24.7309C18.8692 24.6709 19.7694 24.4637 20.5563 24.1612C21.3716 23.8469 22.0618 23.4278 22.7509 22.7463C23.4387 22.0647 23.8623 21.3808 24.1785 20.5757C24.4852 19.7953 24.6941 18.9042 24.7542 17.5988C24.8144 16.2922 24.8286 15.8743 24.8286 12.5443C24.8286 9.2154 24.8144 8.79753 24.7542 7.48976C24.6941 6.18552 24.4852 5.29445 24.1785 4.51402C23.8623 3.7077 23.4387 3.0238 22.7509 2.34226C22.0618 1.66071 21.3716 1.24166 20.5563 0.928547C19.7694 0.62603 18.8692 0.418858 17.5501 0.358826C16.2298 0.298793 15.8075 0.284668 12.4449 0.284668Z" fill="#B4B1AD"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.445 6.24902C8.93262 6.24902 6.08447 9.0682 6.08447 12.5442C6.08447 16.0214 8.93262 18.8406 12.445 18.8406C15.9574 18.8406 18.8044 16.0214 18.8044 12.5442C18.8044 9.0682 15.9574 6.24902 12.445 6.24902ZM12.445 16.6311C10.1644 16.6311 8.31674 14.8019 8.31674 12.5442C8.31674 10.2877 10.1644 8.45846 12.445 8.45846C14.7245 8.45846 16.5733 10.2877 16.5733 12.5442C16.5733 14.8019 14.7245 16.6311 12.445 16.6311Z" fill="#B4B1AD"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.5411 6.00068C20.5411 6.81289 19.8757 7.47207 19.0557 7.47207C18.2345 7.47207 17.5691 6.81289 17.5691 6.00068C17.5691 5.1873 18.2345 4.5293 19.0557 4.5293C19.8757 4.5293 20.5411 5.1873 20.5411 6.00068Z" fill="#B4B1AD"></path>
</svg>
</a><a className="social-sharing-icon youtube" rel="noopener" href="https://www.youtube.com/srface" title="Watch SRFACE / The Ultimate Wetsuit on Youtube">

<svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M24.048 0.566298C25.2097 0.878421 26.1247 1.79804 26.4352 2.96587C26.9993 5.0826 26.9993 9.49902 26.9993 9.49902C26.9993 9.49902 26.9993 13.9155 26.4352 16.0319C26.1247 17.1998 25.2097 18.1196 24.048 18.4317C21.9424 18.999 13.4993 18.999 13.4993 18.999C13.4993 18.999 5.05616 18.999 2.95055 18.4317C1.78884 18.1196 0.873827 17.1998 0.563342 16.0319C-0.000732422 13.9155 -0.000732422 9.49902 -0.000732422 9.49902C-0.000732422 9.49902 -0.000732422 5.0826 0.563342 2.96587C0.873827 1.79804 1.78884 0.878421 2.95055 0.566298C5.05616 -0.000976562 13.4993 -0.000976562 13.4993 -0.000976562C13.4993 -0.000976562 21.9424 -0.000976562 24.048 0.566298ZM18.014 10.0705L10.9993 5.99902V14.1419L18.014 10.0705Z" fill="#B4B1AD"></path>
</svg>
</a></div>
        </div>
    </div>
      </div>
  );
};

export default Footer;
