import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";
import React from "react";

function Header() {
  return (
    <header className="bg-nav-bg text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex h-16 items-center justify-between text-white">
          <div className="flex items-center text-white">
            <Link href="/">
              <Image
                className="h-12 w-12"
                src={logo}
                alt="CoWorkIt !"
                priority={true}
              />
            </Link>
            <div className="hidden md:block text-white">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-500 hover:text-white"
                >
                  Rooms
                </Link>

                <Link
                  href="/bookings"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-500 hover:text-white"
                >
                  Bookings
                </Link>
                <Link
                  href="/rooms/add"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-500 hover:text-white"
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-auto text-white">
            <div className="ml-4 flex items-center md:ml-6 text-white">
              <Link
                href="/login"
                className="mr-3 text-white hover:text-gray-400 "
              >
                <FaSignInAlt className="inline mr-1" />
                Login
              </Link>
              <Link
                href="/register"
                className="mr-3 text-white hover:text-gray-400"
              >
                <FaUser className="inline mr-1" /> Register
              </Link>
              <Link
                href="/rooms/my"
                className="mr-3 text-white hover:text-gray-400"
              >
                <FaBuilding className="inline mr-1" /> My Rooms
              </Link>
              <Link
                href="/login"
                className="mr-3 text-white hover:text-gray-400"
              >
                <FaSignOutAlt className="inline mr-1" /> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>

          <Link
            href="/bookings"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/rooms/add"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
