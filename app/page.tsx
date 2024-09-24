import DashboardCard from "@/components/dashboard/dashboard-card";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={100} Icon={Newspaper} />
        <DashboardCard title="Categories" count={12} Icon={Folder} />
        <DashboardCard title="Users" count={750} Icon={User} />
        <DashboardCard title="Comments" count={100} Icon={MessageCircle} />
      </div>
    </>
  );
}
