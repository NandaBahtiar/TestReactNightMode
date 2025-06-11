import React, { useContext } from "react";
import ThemeContext from "./state/ThemeContext ";

const Project = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`px-40 flex flex-1 justify-center py-5 ${
        theme.theme ? "bg-[#101a23] text-white" : "bg-white text-black"
      }}`}
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className={` ${theme.theme ? "text-white" : "text-black"} tracking-light text-[32px] font-bold leading-tight`}>
              Projects
            </p>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">
              A curated collection of design projects showcasing a range of
              skills and styles.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">All</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Branding
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Illustration
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Web Design
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div
            className={`flex flex-col gap-3 pb-3 ${
              theme.theme ? "shadow-lg" : ""
            }`}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGx36sg2AstNY4S27rfOeeWsW6pnKWMBXWT4aATN9t2vH4CObJpjAZOJdJgFGBsMZPSyYlo9jMj2yqnlAj73J2wtmuNIgk-Fslbis9vNlSljyfIH3EdyJXxmTxfq58NLHbyoCauOBK2XXjtM5nQ7csZmc6PFJYCSBcvPs_3zyOfVMOitqmxDx5l6mdQkcO64eXYztehJbv-s33RqIYbeykSgEF1NchAeQDuPrhlxVAhFrQAxHwhbcNVRSblGF_4SMcvGlNx20GmQ")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 1
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAda3R0Py90RY_LsQmD7jsxX8uodV9lk_ew4vvwsMgtI7alGBztk3_4YY24I3K3lRbNMRaJuqr2e7xj85CzKZcW3EZ4549knwFYHxg-WVBk7S-ieWXacigJC2Gj5KpvMNhTG5qJ6DDbEk5twgSkdJ_q7O-e5zvJ53bus6_9UIu5z3djNdEAVUXO12Cua1MCStpkQvN6Eh1IdWuy8HKvlmMwzyhK3ENFh1dV9zIxuFI5ipTKNwEgNnV75to5klO2CTFxLFtYfQ9X-A")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 2
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmjw_zCy6DIf5B06SJCt0tXilIRADOumc7wUHuXJ5IqXoDNOm1WH-fL85HWyHjK6GRU8kuOyhsUXp-Rw0mvH_tb32B4Nlza71xhmETJVGzIVgqoRgMlkyuhb1hYHCwAPwFzb6zRrWdbEYET4ap3umwEaXQ9Pm5wbga8EGdFk6pv-zr8eA9Jj4afv7tTJzL_p9xpcmpE-g7TSxheKZPZDa1WjFoLCmrqFKBtCB3DJtQ1UmYyAW7LVUUt358bVx0y2lJdf6gJhvXnw")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 3
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1X83NRfdk2hHAQXHJGdMB-7zxJdAGyP6LHOvqwn6-WxfchebWCP_Z-6Rbci19XwDBzuGiuH2whpH1gpXlnBnkvD_V2xH1fOUgKTQIdZ2LOeI7LqSusZ1-wBKiPH0XTPHYE34x3cRVGDLuZNHRM5pdrJKaOv2dDQdVRfWxZM-Ci-vJbsC3y9pB2j66QRStQx37mXCBXTn0UPeFUbt5FmApGYORD75ecr8sjeqvWXn61LdQr-GVcGO8uORUUhGOfPkl9p9dp6Lzeg")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 4
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu2jPFToWwHqo32XfwoFKSMWkMTTDMmBHWXhCEFxcikd7T-dDRdjz5NcRFKYDXJAYLBbDAN6e3m07cNOcgmbC0hlczhg4rDU29AzTh9_nBSabVlqufQLXfS7Wxkbqr7wCfSEMECcJktrm-FpmFU1lAxzIX8isRcZUaKj-T2yW6fZ58LMNV-SMce2PWtYTXZVPZtwpT_wLMhUL5XGhNhqY4k5DfScTO5A1J9ZhrLB3bDFbrstuVmEv1TcdvWsKIq9RyZ_kjq48N1Q")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 5
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGxUYBQQcPREOyMc0WgqSgSTI7F7EkGx1fOmkEKJhfgeCi5zx8S1kFizWho58nViNI7nJCNo99wWwiD_RiLNxjaBgnunD_9Kzo6CVvhGQvb1rYrWn56QLzaHPGb-e2XJtALa2tUWLGfZwaVlKR6ywEorc0M3gWfdQMDz0QkHZEG0_vD3gNrrbZv3ZJbh9IsH01NkGoFp6jyb6hSNCXVqgY1iUhJ30aOw3gKt23JMJWg8DvFvGES58J0mgf55Mt6EO16FstFCAxEw")',
              }}
            ></div>
            <p className={`text-base font-medium leading-normal ${theme.theme ? "text-white" : "text-black"}`}>
              Project Title 6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
