import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LearningProgress() {
  return (
    <Card className="rounded-md shadow-sm border border-slate-200 bg-white md:col-span-3 flex flex-col">
      <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
        <CardTitle className="text-base font-semibold text-slate-900">Continue Learning</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-6 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs font-semibold text-[#103B6B] tracking-wider uppercase mb-1">In Progress</div>
              <h3 className="font-bold text-slate-900 leading-tight">Frontend Web Development</h3>
            </div>
            <div className="text-xl font-bold text-slate-900">75%</div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#103B6B] rounded-full" style={{ width: "75%" }} />
          </div>
          <p className="text-sm text-slate-500">You are 3 modules away from earning your certificate.</p>
          <Button className="w-full mt-2 bg-[#103B6B] hover:bg-[#0a2646] text-white font-medium h-10">
            Resume Course
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
