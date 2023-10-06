"use client";
import React from "react";
import Link from "next/link";
import { sidebarLinks } from "../../constants/index";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

type Props = {};

export default function LeftSidebar({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link, idx) => {
          const isActive =
            pathname === link.route ||
            (pathname.includes(link.route) && link.route.length > 1);
          return (
            <div key={idx}>
              <Link
                href={link.route}
                className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                ></Image>
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton
            signOutCallback={() => {
              router.push("/sign-in");
            }}
          >
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="assets/logout.svg"
                width={24}
                height={24}
                alt="logout"
              />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
