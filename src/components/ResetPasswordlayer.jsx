import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordLayer = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <section className="auth forgot-password-page bg-base d-flex flex-wrap">
        <div className="auth-left d-lg-block d-none">
          <div className="d-flex align-items-center flex-column h-100 justify-content-center">
            <img src="assets/images/auth/forgot-pass-img.png" alt="" />
          </div>
        </div>
        <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
          <div className="max-w-464-px mx-auto w-100">
            <div>
              <h4 className="mb-12">Reset Password</h4>
              <p className="mb-32 text-secondary-light text-lg">
                Enter the email address associated with your account and we will
                send you a OTP to reset your password.
              </p>
            </div>
            <form action="#">
              <label htmlFor="otp" className="w-100 mb-16">
                <div className="position-relative ">
                  <div className="icon-field">
                    <span className="icon top-50 translate-middle-y">
                      <Icon icon="solar:lock-password-outline" />
                    </span>
                    <input
                      type="number"
                      max={6}
                      className="form-control h-56-px bg-neutral-50 radius-12"
                      id="password"
                      placeholder="Enter OTP"
                      defaultValue="admin123"
                      //   data-error={errors?.password ? "true" : "false"}
                      //   {...register("password")}
                    />
                  </div>
                </div>
                {/* {errors?.password && (
                              <p className="text-danger-500">{errors?.password?.message}</p>
                            )} */}
              </label>

              <label htmlFor="password" className="w-100 mb-16">
                <div className="position-relative ">
                  <div className="icon-field">
                    <span className="icon top-50 translate-middle-y">
                      <Icon icon="solar:lock-password-outline" />
                    </span>
                    <input
                      type={hidePassword ? "password" : "text"}
                      className="form-control h-56-px bg-neutral-50 radius-12"
                      id="password"
                      placeholder="Password"
                      defaultValue="admin123"
                      //   data-error={errors?.password ? "true" : "false"}
                      //   {...register("password")}
                    />
                  </div>
                  <span
                    onClick={() => setHidePassword(!hidePassword)}
                    className={`toggle-password ${
                      hidePassword ? "ri-eye-off-line" : "ri-eye-line"
                    } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                    data-toggle="#password"
                  />
                </div>
                {/* {errors?.password && (
                              <p className="text-danger-500">{errors?.password?.message}</p>
                            )} */}
              </label>
              <button
                type="button"
                className="btn btn-success text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Continue
              </button>
              <div className="text-center">
                <Link to="/sign-in" className="text-success-600 fw-bold mt-24">
                  Back to Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-body p-40 text-center">
              <div className="mb-32">
                <img src="assets/images/auth/envelop-icon.png" alt="" />
              </div>
              <h6 className="mb-12">Verify your Email</h6>
              <p className="text-secondary-light text-sm mb-0">
                Thank you, check your email for instructions to reset your
                password
              </p>
              <button
                type="button"
                className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
              >
                Skip
              </button>
              <div className="mt-32 text-sm">
                <p className="mb-0">
                  Don’t receive an email?{" "}
                  <Link to="/resend" className="text-primary-600 fw-semibold">
                    Resend
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordLayer;
