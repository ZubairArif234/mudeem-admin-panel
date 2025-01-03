import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const TopSellingProductOne = () => {
  return (
    <div className="card h-100">
      <div className="card-body p-24">
        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
          <h6 className="mb-2 fw-bold text-lg mb-0">
            <Icon
              className="me-2"
              icon="material-symbols:leaderboard-rounded"
              width="24"
              height="24"
            />
            Leaderboard
          </h6>
          {/* <Link
            to="/user"
            className="text-success-600 hover-text-success d-flex align-items-center gap-1"
          >
            View All
            <Icon icon="solar:alt-arrow-right-linear" className="icon" />
          </Link> */}
        </div>
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone </th>
                <th scope="col">Green Points </th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4]?.map((item) => {
                return (
                  <tr key={item}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/user.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1 d-flex ">
                          <h6 className="text-md mb-0 fw-normal">
                            Krystal Dorrus
                          </h6>
                          {item === 0 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              fill="none"
                              viewBox="0 0 26 26"
                            >
                              <g clipPath="url(#clip0_1734_7509)">
                                <path
                                  fill="url(#paint0_linear_1734_7509)"
                                  d="m17.112 19.602-.919-.112v-6.008a.514.514 0 0 0-.518-.518c-.03 0-.056.005-.086.005l-3.24.539a.52.52 0 0 0-.432.513v1.03c0 .285.229.514.513.518l.874.01v3.91l-.92.113a.516.516 0 0 0-.452.512v1.087a.52.52 0 0 0 .518.518h4.601a.52.52 0 0 0 .518-.518v-1.087a.524.524 0 0 0-.457-.512m-.06 1.6H12.45v-1.088l1.377-.167v-4.88l-1.387-.015V14.02l3.24-.539v6.465l1.371.168zm3.848-9.614a1.8 1.8 0 0 0-.822-.228.75.75 0 0 1-.701-.559 1.75 1.75 0 0 0-.442-.792l5.292-8.623 1.492 2.494zM23.927.884l-5.408 8.805a1.7 1.7 0 0 0-.63-.208L23.4 0zM22.373.726H7.007L6.58 0h16.215zm-.3.518-1.447 2.488H8.754L7.306 1.244zM20.327 4.25l-.422.727H9.475l-.422-.727zM5.986 0l5.505 9.48c-.224.031-.437.102-.63.21L5.453.883zm2.493 11.588L3.655 3.88 5.148 1.39l5.297 8.623a1.8 1.8 0 0 0-.442.792.75.75 0 0 1-.701.559c-.29.005-.574.081-.823.223m-5.118-7.21 4.712 7.53c-.036.04-.076.082-.107.122a1.8 1.8 0 0 0-.345.716L3 4.982zm18.992 12.258a1.26 1.26 0 0 0 0 1.518 1.258 1.258 0 0 1-.432 1.88 1.26 1.26 0 0 0-.66 1.37 1.262 1.262 0 0 1-1.204 1.509 1.26 1.26 0 0 0-1.188.95 1.26 1.26 0 0 1-1.737.837 1.26 1.26 0 0 0-1.482.34c-.503.6-1.427.6-1.93 0a1.27 1.27 0 0 0-1.483-.34 1.257 1.257 0 0 1-1.737-.838 1.26 1.26 0 0 0-1.188-.95 1.262 1.262 0 0 1-1.203-1.508 1.26 1.26 0 0 0-.66-1.37 1.257 1.257 0 0 1-.427-1.88c.34-.452.34-1.071 0-1.518a1.26 1.26 0 0 1 .426-1.879 1.26 1.26 0 0 0 .66-1.371 1.262 1.262 0 0 1 1.204-1.508 1.26 1.26 0 0 0 1.188-.95 1.26 1.26 0 0 1 1.737-.838 1.26 1.26 0 0 0 1.483-.34 1.26 1.26 0 0 1 1.93 0c.36.432.97.569 1.482.34a1.26 1.26 0 0 1 1.737.838c.142.549.625.934 1.188.95.783.02 1.356.741 1.204 1.508a1.26 1.26 0 0 0 .66 1.371c.696.356.904 1.254.432 1.879m-.594-3.895a1.7 1.7 0 0 0-.346-.716c-.035-.046-.07-.081-.106-.122l4.712-7.53.36.604zm-7.07-1.711a6.375 6.375 0 0 0-6.367 6.368c0 3.514 2.859 6.363 6.368 6.363a6.375 6.375 0 0 0 6.368-6.368c0-3.514-2.86-6.363-6.368-6.363m0 12.213a5.847 5.847 0 1 1 0-11.695 5.847 5.847 0 1 1 0 11.695"
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1734_7509"
                                  x1="5.32"
                                  x2="24.059"
                                  y1="0.663"
                                  y2="19.402"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFDE00"></stop>
                                  <stop offset="1" stopColor="#FD5C00"></stop>
                                </linearGradient>
                                <clipPath id="clip0_1734_7509">
                                  <path fill="#fff" d="M0 0h26v26H0z"></path>
                                </clipPath>
                              </defs>
                            </svg>
                          ) : item === 1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <g clipPath="url(#clip0_1734_7512)">
                                <path
                                  fill="url(#paint0_linear_1734_7512)"
                                  d="M14.775 9.525h-1.331c.337-.361.619-.68.834-.947.277-.337.478-.67.605-.98.131-.323.197-.68.197-1.059 0-.553-.132-1.05-.394-1.477a2.63 2.63 0 0 0-1.12-.993q-.698-.338-1.64-.338c-.629 0-1.2.136-1.684.399a2.87 2.87 0 0 0-1.13 1.101 2.96 2.96 0 0 0-.37 1.542q.001.07.024.141l.01.033a.48.48 0 0 0 .454.328h1.823a.48.48 0 0 0 .478-.478c0-.263.042-.44.132-.567.023-.038.07-.103.257-.103.17 0 .211.051.225.075a.55.55 0 0 1 .104.351.8.8 0 0 1-.061.31 2 2 0 0 1-.23.43 6 6 0 0 1-.488.62l-2.484 2.615a.48.48 0 0 0-.131.328v1.196a.48.48 0 0 0 .478.478h5.437a.48.48 0 0 0 .479-.478V9.994a.47.47 0 0 0-.474-.469m0 2.531H9.338v-1.195l2.489-2.625c.225-.253.398-.478.53-.675q.194-.295.285-.534c.056-.165.09-.32.09-.474a1.02 1.02 0 0 0-.202-.642q-.204-.262-.605-.263-.44 0-.652.31-.21.31-.21.839H9.234l-.009-.033q-.014-.716.31-1.298a2.37 2.37 0 0 1 .942-.92c.407-.224.895-.337 1.448-.337q.83.002 1.43.291.596.29.918.81.324.522.324 1.224c0 .32-.052.614-.164.882a3.7 3.7 0 0 1-.53.857c-.244.305-.576.675-.984 1.107l-1.167 1.237.009.028h1.533l.08-.642h1.396zm-1.894-1.936-.004.047h-.038zM12.001.24a8.04 8.04 0 0 1 0 16.078A8.04 8.04 0 0 1 12 .24m6.22 13.852 2.367 4.097-2.907-.333a.25.25 0 0 0-.248.14l-1.167 2.686-2.367-4.097a8.53 8.53 0 0 0 4.321-2.493m-8.124 2.493-2.363 4.097L6.572 18a.24.24 0 0 0-.22-.145h-.028l-2.907.332 2.367-4.096a8.54 8.54 0 0 0 4.313 2.493m-2.54 7.177-1.923-4.43-4.8.549 4.022-6.966q.275.416.591.797l-2.681 4.65a.24.24 0 0 0 .01.253c.05.08.135.117.224.108l3.202-.366 1.284 2.958c.038.084.117.14.206.145h.014a.24.24 0 0 0 .207-.117l2.685-4.65q.484.08.99.108zm10.809-4.43-1.922 4.43-4.027-6.975c.333-.019.666-.052.99-.108l2.685 4.65a.23.23 0 0 0 .207.117h.014a.24.24 0 0 0 .206-.145l1.284-2.958 3.202.366a.25.25 0 0 0 .23-.108.24.24 0 0 0 .004-.253L18.558 13.7q.316-.38.59-.796l4.022 6.965zM12 14.616a6.345 6.345 0 0 0 6.338-6.338c0-3.497-2.846-6.333-6.338-6.333a6.345 6.345 0 0 0-6.337 6.338c0 3.497 2.845 6.333 6.337 6.333m0-12.197c3.235 0 5.86 2.62 5.86 5.86A5.86 5.86 0 0 1 12 14.136a5.86 5.86 0 0 1-5.86-5.859c0-3.239 2.626-5.86 5.86-5.86"
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1734_7512"
                                  x1="3.466"
                                  x2="20.534"
                                  y1="5.443"
                                  y2="22.511"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFDE00"></stop>
                                  <stop offset="1" stopColor="#FD5C00"></stop>
                                </linearGradient>
                                <clipPath id="clip0_1734_7512">
                                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                                </clipPath>
                              </defs>
                            </svg>
                          ) : item === 2 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="none"
                              viewBox="0 0 28 28"
                            >
                              <path
                                fill="url(#paint0_linear_1734_7515)"
                                d="M17.303 10.002a2.8 2.8 0 0 0-.492-.492c.164-.142.312-.295.432-.454.312-.415.465-.919.465-1.487 0-.99-.372-1.772-1.105-2.325-.684-.514-1.586-.776-2.669-.776-.672 0-1.29.12-1.832.36-.563.252-1.011.608-1.329 1.067a2.64 2.64 0 0 0-.47 1.646c0 .055.011.104.027.159l.011.038c.077.23.29.383.53.383h2.112a.56.56 0 0 0 .558-.558.26.26 0 0 1 .038-.153.34.34 0 0 1 .131-.115.55.55 0 0 1 .246-.049c.24 0 .312.077.34.11.049.054.12.158.12.36a.65.65 0 0 1-.06.29.34.34 0 0 1-.154.148.8.8 0 0 1-.355.065h-.984a.56.56 0 0 0-.558.558v1.608a.56.56 0 0 0 .558.558h.918c.285 0 .487.06.607.17.115.109.17.245.17.431 0 .236-.077.34-.148.41-.066.066-.18.148-.454.148a.6.6 0 0 1-.317-.07.43.43 0 0 1-.18-.176.47.47 0 0 1-.06-.246.56.56 0 0 0-.558-.558h-2.122a.56.56 0 0 0-.553.465l-.005.038q-.006.043-.005.077c-.017.7.163 1.302.53 1.8.355.475.831.841 1.422 1.087a4.9 4.9 0 0 0 1.843.35c.71 0 1.361-.125 1.936-.366.59-.252 1.072-.623 1.416-1.105.356-.492.541-1.082.541-1.75q0-.958-.54-1.646m-.448 3.057q-.434.6-1.187.919-.753.321-1.712.323-.886-.001-1.635-.307a2.7 2.7 0 0 1-1.187-.902c-.295-.394-.432-.88-.42-1.455l.005-.038h2.116a1.02 1.02 0 0 0 .525.908c.17.098.367.142.59.142q.535 0 .848-.312.312-.31.312-.803c0-.329-.115-.619-.339-.832-.23-.219-.558-.322-.99-.322h-.924V8.772h.984c.247 0 .449-.044.618-.131a.9.9 0 0 0 .383-.372 1.13 1.13 0 0 0 .131-.553 1.07 1.07 0 0 0-.262-.738c-.175-.197-.427-.29-.755-.29q-.278.001-.497.11a.87.87 0 0 0-.35.306.8.8 0 0 0-.126.454h-2.111l-.011-.039c-.017-.497.104-.93.366-1.307q.395-.564 1.1-.875.705-.31 1.607-.311 1.45.001 2.336.667c.59.443.88 1.072.88 1.881 0 .449-.12.837-.355 1.154q-.355.484-1.061.82c.475.175.853.449 1.137.804.285.361.427.788.427 1.29-.011.542-.159 1.018-.443 1.417m1.673 14.662L14 24.363l-4.528 3.358v-9.215c.344.175.694.334 1.06.47v6.087c0 .104.061.203.154.246.093.05.208.039.29-.027l3.018-2.237 3.02 2.237c.049.038.109.055.163.055q.067-.001.126-.028a.28.28 0 0 0 .153-.246v-6.092c.367-.137.717-.29 1.061-.47zm-7.437-8.559a10.04 10.04 0 0 0 5.819 0v5.343l-2.746-2.034a.27.27 0 0 0-.164-.055.27.27 0 0 0-.164.055l-2.74 2.034v-5.343zM14 19.037c-5.179 0-9.379-4.2-9.379-9.38C4.621 4.48 8.821.28 14 .28s9.379 4.2 9.379 9.379-4.2 9.379-9.379 9.379m0-16.773c-4.074 0-7.394 3.314-7.394 7.394s3.32 7.394 7.394 7.394 7.394-3.315 7.394-7.394S18.074 2.269 14 2.264m0 14.23a6.835 6.835 0 0 1-6.836-6.836A6.835 6.835 0 0 1 14 2.822a6.84 6.84 0 0 1 6.836 6.836A6.84 6.84 0 0 1 14 16.494"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1734_7515"
                                  x1="5.036"
                                  x2="22.963"
                                  y1="5.357"
                                  y2="23.284"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFDE00"></stop>
                                  <stop offset="1" stopColor="#FD5C00"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          ) : null}
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <span className="text-sm text-secondary-light fw-normal">
                        krystal@gmail.com
                      </span>
                    </td>
                    <td>0900987665</td>
                    <td className="text-success-500 fw-bold">
                      {98 - item} pts
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductOne;
