"use client";

import { useState } from "react";
import { TabNav, TabContent } from "@components/dashboard-components";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section
      className="flex justify-center bg-opacity-50 h-screen backdrop-filter backdrop-blur-xl py-6
     text-white w-full sm:py-14 sm:px-16 px-4"
    >
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-full mb-4 sm:w-1/4 sm:mb-0">
          <ul
            className="mr-4 flex list-none flex-row pl-0 overflow-y-hidden w-full sm:py-2 sm:px-4 sm:flex-wrap sm:flex-col"
            role="tablist"
          >
            <TabNav
              title="My Profile"
              id="profile"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNav
              title="Transaction History"
              id="history"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNav
              title="Account Settings"
              id="settings"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </div>
        <div className="bg-white bg-opacity-95 p-5 text-gray-900 w-full sm:w-5/6 min-h-screen/4 rounded">
          <TabContent id="profile" activeTab={activeTab}>
            <div className="flex flex-col sm:px-4">
              <div className="pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8">
                  <div className="p-4">
                    <div className="flex flex-col justify-center items-center border-b mb-5 pb-4">
                      <svg
                        className="h-40 w-40 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h3 className="text-lg font-semibold leading-6 text-gray-800">
                        John Doe
                      </h3>
                    </div>
                    <div className="mt-5">
                      <ul className="w-full flex flex-col sm:flex-row sm:space-x-4">
                        <li className="w-full border-opacity-100 py-2 font-normal">
                          Email <br />
                          <span className="font-semibold">12322@gmail.com</span>
                        </li>
                        <li className="w-full border-opacity-100 py-2 font-normal">
                          Phone <br />
                          <span className="font-semibold">12322@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="history" activeTab={activeTab}>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium">
                        <tr>
                          <th scope="col" class="px-6 py-4">
                            ID
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Transaction Type
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Amount
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Initiated
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Completed
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            1
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">54586</td>
                          <td class="whitespace-nowrap px-6 py-4">Otto</td>
                          <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                          <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="settings" activeTab={activeTab}>
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                    <div className="w-full sm:w-3/6">
                      <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          name="email"
                          type="email"
                          autocomplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
            sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-3/6">
                      <label
                        for="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-start gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 px-4 py-2 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </TabContent>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
