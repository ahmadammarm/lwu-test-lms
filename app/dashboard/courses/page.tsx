"use client";

import { useState } from "react";
import { initialCourses } from "@/lib/mock-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { SearchInput } from "@/components/shared/SearchInput";
import { EmptyState } from "@/components/shared/EmptyState";
import { CourseList } from "@/components/features/courses/CourseList";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = initialCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <PageHeader 
        title="My Courses" 
        description="Continue learning and track your progress."
        action={
          <SearchInput 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search courses or categories..." 
          />
        }
      />

      {filteredCourses.length === 0 ? (
        <EmptyState 
          title="No courses found" 
          description={`We couldn't find any courses matching "${searchQuery}"`} 
        />
      ) : (
        <CourseList courses={filteredCourses} />
      )}
    </div>
  );
}
