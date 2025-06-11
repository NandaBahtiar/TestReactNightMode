import React from "react";
import ThemeContext from "./state/ThemeContext ";
import { useContext } from "react";

const Skill = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`"relative flex size-full min-h-screen flex-col  marker: dark group/design-root overflow-x-hidden" ${
        theme.theme ? "bg-[#101a23] text-white" : "bg-white text-black"
      }`}
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkpvj6vrdA0Bx2X_Otz08r3Yg__3zn9yZwBu4TcsNPvzOvKIl6AdkPRjF5uHAiFiMq0y9JTN4kvPsBjGnZdmNZ0iI0XxG9vWs4re8iutERtwO9ikIxWDrH0bEbjese-0_eYHIoEbnQaOrOakWfhWbJ8w6Qfzlozk-HK3qrtv_9n63S5KYpHP10himypRLMD3Owpw3zvlZ1zAhbxzYn68oiBcdf7lKYcu0bhAo20FLivxNCV8cGSg_M26NVe3znOQ-wy9vF4QYFSw")',
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className=" text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Sophia Carter
                    </p>
                    <p className="text-[#90adcb] text-base font-normal leading-normal text-center">
                      Graphic Designer
                    </p>
                    <p className="text-[#90adcb] text-base font-normal leading-normal text-center">
                      Based in San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className=" text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              I'm a graphic designer with over 5 years of experience in creating
              visual identities and marketing materials for a variety of
              clients. My expertise includes branding, web design, and print
              design. I'm passionate about creating visually appealing and
              effective designs that help businesses achieve their goals.
            </p>
            <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Skills
            </h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  Branding
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  Web Design
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  Print Design
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  Illustration
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  UI/UX Design
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">
                  Motion Graphics
                </p>
              </div>
            </div>
            <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Experience
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div
                  className=""
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className=" text-base font-medium leading-normal">
                  Senior Graphic Designer at Creative Solutions
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  2018 - Present
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div
                  className=""
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#314d68] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className=" text-base font-medium leading-normal">
                  Graphic Designer at Visual Arts Studio
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  2016 - 2018
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#314d68] h-2"></div>
                <div
                  className=""
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className=" text-base font-medium leading-normal">
                  Freelance Graphic Designer
                </p>
                <p className="text-[#90adcb] text-base font-normal leading-normal">
                  2014 - 2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
