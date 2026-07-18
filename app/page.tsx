"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Trophy, Users } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="h-screen overflow-hidden flex w-full bg-white">
      {/* Left Panel - Brand (Hidden on mobile) */}
      <div className="hidden lg:flex w-3/5 bg-[#103B6B] text-white p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-16">
            <div className="bg-white text-[#103B6B] p-2 rounded-sm leading-none">LWU</div>
            Learning With Us
          </div>
          <h1 className="text-5xl font-bold tracking-tight leading-tight max-w-lg mb-6">
            Learn at your own pace. Master your craft.
          </h1>
          <p className="text-[#103B6B] text-lg text-white/80 max-w-md">
            The premium platform for modern students to track courses, read ebooks, and manage their learning journey.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-md"><BookOpen className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-lg">200+ Premium Courses</h3>
              <p className="text-white/70 text-sm">Taught by industry experts</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-md"><Trophy className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-lg">Earn Certificates</h3>
              <p className="text-white/70 text-sm">Validate your skills upon completion</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-md"><Users className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-lg">Community Driven</h3>
              <p className="text-white/70 text-sm">Join thousands of other learners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12 h-full overflow-y-auto">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <div className="lg:hidden mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-[#103B6B] text-white font-bold text-xl">
              LWU
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
            <p className="text-slate-500">Enter your credentials to access your dashboard</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">Email Address</Label>
              <Input id="email" type="email" placeholder="student@example.com" className="h-11 px-3 py-2 border-slate-200" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700">Password</Label>
                <Link href="#" className="text-sm font-medium text-[#103B6B] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" className="h-11 px-3 py-2 border-slate-200" />
            </div>
          </div>

          <Link 
            href="/dashboard"
            className="flex items-center justify-center w-full h-11 text-base font-medium rounded-md bg-[#103B6B] hover:bg-[#0a2646] text-white transition-colors"
          >
            Sign In to Dashboard
          </Link>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account? <Link href="#" className="font-semibold text-[#103B6B] hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
