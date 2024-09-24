import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  count: number;
  Icon: LucideIcon;
}

export default function DashboardCard(props: Props) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {props.title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          <props.Icon className="text-slate-500" size={72} />
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {props.count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
