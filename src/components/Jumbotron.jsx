import React, { useContext } from "react";
import ThemeContext from "./state/ThemeContext ";
 
const Jumbotron = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`px-40 flex flex-1 justify-center py-5 ${
        theme.theme ? "bg-[#101a23] text-white" : "bg-white text-black"
      } `}
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuArzskS4XQNXyAWDy9Yi9WKqxZolLqGlk3fdn0vu1B9WDWS74HDNcXIGDupfK-G99vl14Zsnl8Fchwmmhc8qHEftRJeAliwYuHByYhW1ZFy7hx6Qj8EPU2JpLhjeFjGOYhDBzL_SXJH8bCIeSw3oKtOhFQQIo4HgMkiwA0FIj53v_704SrKaN0jfd4P1zPUnZGLYtSGDzeMdLgcH61idYeMWbWACU1GfvewJvwSsBluTOnkmcBdsvux38uh4GuYRFVLkNwNHvzXbw")',
              }}
            >
              <div className="flex flex-col gap-2 text-left text-white">
                <h1 className=" text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Hi, I&apos;m Amelia, a graphic designer
                </h1>
                <h2 className=" text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  I create visual identities and digital experiences for brands
                  and businesses. My work is driven by a passion for design and
                  a commitment to delivering exceptional results. I&apos;m
                  always looking for new challenges and opportunities to
                  collaborate with like-minded individuals and organizations.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3d98f4]  text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate text-white">View my work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
