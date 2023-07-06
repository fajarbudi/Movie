"use client";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function navbar(props: any) {
  const [input, setInput] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (input.length >= 3) {
      const timer = setTimeout(() => {
        router.push(`/search/${input}`);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [input]);

  return (
    <>
      <div
        className={`navbar ${props.bg} shadow-xl ${props.position} top-0 z-10`}
      >
        <div className="navbar-start pl-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${props.text}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/#Popular">Popular</Link>
              </li>
              <li>
                <Link href="/#TopRated">Top Rated</Link>
              </li>
            </ul>
          </div>
          <div className="navlist menu">
            <ul className={`flex flex-row ${props.text}`}>
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/#Popular">Popular</Link>
              </li>
              <li>
                <Link href="/#TopRated">Top Rated</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className={`btn btn-ghost normal-case text-xl ${props.text} `}>
            Movie
          </a>
        </div>
        <div className={`navbar-end ${props.text}`}>
          <input
            id="ini"
            type="text"
            placeholder="Search Movie...."
            className=" transition-all duration-500 text-black scale-x-0 origin-right rounded-md w-64 pl-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              document.getElementById("ini")?.classList.remove("scale-x-0");
              document.getElementById("ini")?.focus();
              setTimeout(() => {
                document.getElementById("ini")?.classList.add("scale-x-0");
              }, 10000);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <DarkMode />
        </div>
      </div>
    </>
  );
}
