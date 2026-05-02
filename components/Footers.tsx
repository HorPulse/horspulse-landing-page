"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram, SiGithub } from "react-icons/si";

import Image from "next/image";
import LogoWhite from "../public/logowhite.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050A14]">
      {/* ── Background grid & glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="px-6 lg:px-16 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand + Newsletter */}
        <div className="space-y-6 lg:col-span-2">
          <div>
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Horspulse Logo"
                className="w-28 transition-all duration-300"
                priority
              />
            </Link>
            <p className=" text-white max-w-sm leading-relaxed mt-2">
              We build modern digital experiences such as web platforms, design systems,
              and scalable solutions that help businesses grow.
            </p>
          </div>

          {/* Location */}
          <p className="text-white">Abuja, Nigeria</p>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="font-medium text-white">Subscribe to our newsletter</p>

            <form className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900 text-sm px-4 py-2 rounded-l-md outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="bg-white text-black text-sm px-4 py-2 rounded-r-md hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-2 text-white">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
            <SiInstagram className="hover:text-gray-300 cursor-pointer" />
            <SiGithub className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="#">Software Development</Link>
            </li>
            <li>
              <Link href="#">UI/UX Design</Link>
            </li>
            <li>
              <Link href="#">Branding</Link>
            </li>
            <li>
              <Link href="#">Consulting</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
            Legal
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Horspulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
