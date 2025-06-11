import React from "react";
import ThemeContext from "./state/ThemeContext ";
import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { Navigate, useNavigate } from "react-router";

const Header = () => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <header
      className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3 sticky top-0 ${
        theme.theme ? "dark:bg-[#101a23] text-white" : "bg-white text-black"
      }  z-50`}
    >
      <div className="flex items-center gap-4  ">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="  text-lg font-bold leading-tight tracking-[-0.015em]">
          Design Portfolio
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="  text-sm font-medium leading-normal" href="#">
            Work
          </a>
          <a className="  text-sm font-medium leading-normal" href="#">
            About
          </a>
          <a className="  text-sm font-medium leading-normal" href="#">
            Contact
          </a>

          <ThemeToggle />
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-5 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <div
            className="text-white"
            data-icon="List"
            data-size="20px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-qc3_hbckVozrbEcnfbkQSKC3NcjP4edk_G5QVCCq0rvYxgQgxEcno-EJ2synpwmifcjgoMNjEJNAJwrEV9S080viNc-oqPJCGZKWgRFtkQogEX0F7MUV-E2jIpJFpt3GvKfSY5EsFZtLiFUovCWOj4OwR9YQzr27RastsjIDd7NICWi5o7SjNtV4RjevbwTUdXywEeFjP23foSfREjYpqndSe_piFuPU8Y2aSpjaUVuGMu_naZrb8oqJ_twcYd7JUhK07b1GvQ")',
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
