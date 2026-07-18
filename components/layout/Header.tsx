"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronDown, LogOut } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

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

      <div className="flex flex-1 items-center justify-end gap-6 relative">
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

      {logoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Confirm Logout</h3>
              <p className="text-sm text-slate-500">Are you sure you want to log out of your account?</p>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-slate-100">
              <button 
                onClick={() => setLogoutModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100"
              >
                Cancel
              </button>
              <Link 
                href="/"
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 flex items-center justify-center"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
