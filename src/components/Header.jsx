import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import {  UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                
                {/* Logo */}
                <Link href="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-slate-500">Sahand</span>
                        <span className="text-slate-900">Blog</span>
                    </h1>
                </Link>

                {/* Search Bar */}
                <form className="bg-slate-50 p-3 rounded-lg flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none"
                    />
                    <button>
                        <FaSearch className="text-slate-500" />
                    </button>
                </form>

                {/* Navigation & Auth */}
                <ul className="flex gap-4 items-center">
                    <Link href="/">
                        <li className="hidden md:inline text-slate-600 hover:underline">
                            Home
                        </li>
                    </Link>

                    <Link href="/about">
                        <li className="hidden md:inline text-slate-600 hover:underline">
                            About
                        </li>
                    </Link>

                    {/* Show Sign In & Sign Up when NOT signed in */}
                    <SignedOut>
                        <Link href="/sign-in">
                            <li className="text-slate-600 hover:underline">
                                Sign In
                            </li>
                        </Link>
                        <Link href="/sign-up">
                            <li className="text-slate-600 hover:underline">
                                Sign Up
                            </li>
                        </Link>
                    </SignedOut>

                    {/* Show User Button when signed in */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ul>
            </div>
        </header>
    );
}
