"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { BookOpen, CreditCard, LayoutDashboard, Library } from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    url: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Ebooks",
    url: "/dashboard/ebooks",
    icon: Library,
  },
  {
    title: "Purchase History",
    url: "/dashboard/purchase-history",
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-[#0A2646] bg-[#103B6B] text-white">
      <SidebarHeader className="h-16 border-b border-[#0A2646] flex flex-row items-center justify-center px-4 py-0">
        <Link href="/dashboard" className="flex items-center gap-3 font-bold text-lg text-white hover:opacity-90 transition-opacity">
          <div className="relative w-8 h-8 rounded-sm overflow-hidden border-2 border-white shrink-0">
            <Image src="/logo.jpg" alt="LWU Logo" fill className="object-cover" />
          </div>
          LWU LMS
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/60 text-xs font-semibold tracking-wider mb-2">MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                // Exact match for dashboard, startswith for subpages to keep parent active if viewing a child page
                const isActive = item.url === "/dashboard" 
                  ? pathname === "/dashboard" 
                  : pathname.startsWith(item.url);
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      render={<Link href={item.url} />}
                      isActive={isActive} 
                      tooltip={item.title}
                      className={`
                        h-9 mb-1
                        ${isActive 
                          ? 'bg-white text-[#103B6B] hover:bg-white hover:text-[#103B6B] font-medium shadow-sm' 
                          : 'text-white/80 hover:bg-[#0A2646] hover:text-white'}
                      `}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-[#103B6B]' : 'opacity-80'}`} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-[#0A2646] p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#103B6B] font-bold text-xs shadow-sm">
            ST
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white leading-tight">Student Name</span>
            <span className="text-xs text-white/60">Free Plan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
