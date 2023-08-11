"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./home-structure";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { navLinks } from "@public/assets/constants";
import { Logo } from "@public/assets/images";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [active, setActive] = useState("Home");
  const isUserLoggedIn = true;

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setupProviders();
  }, []);

  return (
    <nav className="flex flex-between w-full py-2 px-4 bg-opacity-50 backdrop-filter backdrop-blur-lg bg-slate-700 z-10">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={Logo}
          alt="lons-lion-logo"
          width={60}
          height={60}
          className="object-contain rounded-full"
        />
      </Link>

      {/* Desktop/LargeScreen Navigation displayed when logged in*/}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-transaction" className="black_btn">
              Initiate Transaction
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={50}
                height={50}
                alt="profile-avatar"
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-4">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } `}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {
                /*if not logged in on PC, this nav is displayed*/
                providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  ))
              }
            </ul>
          </>
        )}
      </div>

      {/* Mobile Navigation */}

      <div className="sm:hidden flex relative">
        {
          /*dynamic rendering which checks if user is logged in*/
          session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                width={50}
                height={50}
                alt="profile-avatar"
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
              ></Image>

              {
                /*dynamic rendering to check if dropdown is toggled on*/
                toggleDropdown && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>

                    <Link
                      href="/history"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      Transaction History
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )
              }
            </div>
          ) : (
            <>
              {
                /*if not logged in on mobile, this nav is displayed*/
                providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  ))
              }
            </>
          )
        }
      </div>
    </nav>
  );
};

export default Nav;
