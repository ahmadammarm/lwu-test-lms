"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronDown, LogOut, User } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const paths = pathname.split("/").filter(Boolean);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-6 shadow-sm">
      <SidebarTrigger className="-ml-2 text-slate-500 hover:text-[#103B6B]" />
      
      <div className="hidden md:flex flex-1 items-center">
        <Breadcrumb>
          <BreadcrumbList className="text-sm font-medium">
            {paths.map((path, index) => {
              const href = "/" + paths.slice(0, index + 1).join("/");
              const isLast = index === paths.length - 1;
              // Format title by removing hyphens and capitalizing
              const title = path.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

              return (
                <React.Fragment key={path}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-slate-900 font-semibold">{title}</BreadcrumbPage>
                    ) : (
                      <Link href={href} className="text-slate-500 hover:text-slate-900 transition-colors">
                        {title}
                      </Link>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator className="text-slate-300">/</BreadcrumbSeparator>}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-1 items-center justify-end gap-6 relative" ref={dropdownRef}>
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 hover:bg-slate-50 p-1.5 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#103B6B] text-white text-xs font-bold shadow-sm">
            ST
          </div>
          <span className="text-sm font-medium text-slate-700 hidden sm:block">Student</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-slate-200 z-30">
            <Link 
              href="/dashboard/profile"
              onClick={() => setDropdownOpen(false)}
              className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </Link>
            <div className="h-px bg-slate-100 my-1 mx-2" />
            <button 
              onClick={() => {
                setDropdownOpen(false);
                setLogoutModalOpen(true);
              }}
              className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>

      <AlertDialog open={logoutModalOpen} onOpenChange={setLogoutModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out of your account?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => router.push("/")}
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
}
