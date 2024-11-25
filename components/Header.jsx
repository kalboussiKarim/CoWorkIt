"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";
import destroySession from "@/app/actions/destroySession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  };
  return (
    <header className="bg-content-bg text-white border-b border-white/40">
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
                {isAuthenticated && (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="ml-auto text-white">
            <div className="ml-4 flex items-center md:ml-6 text-white">
              {!isAuthenticated && (
                <>
                  <Link
                    href="/login"
                    className="mr-3 text-white hover:text-gray-400 "
                  >
                    <FaSignInAlt className="inline mr-1 text-[#DB1A5A]" />
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="mr-3 text-white hover:text-gray-400"
                  >
                    <FaUser className="inline mr-1 text-[#DB1A5A]" /> Register
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link
                    href="/rooms/my"
                    className="mr-3 text-white hover:text-gray-400"
                  >
                    <FaBuilding className="inline mr-1 text-[#DB1A5A]" /> My
                    Rooms
                  </Link>

                  <button
                    className="mr-3 text-white hover:text-gray-400"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="inline mr-1 text-[#DB1A5A]" /> Sign
                    Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-sm font-medium  text-white hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>
          {isAuthenticated && (
            <>
              <Link
                href="/bookings"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Bookings
              </Link>
              <Link
                href="/rooms/add"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Add Room
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
