import AnalyticsChart from "@/components/dashboard/analytics-chart";
import DashboardCard from "@/components/dashboard/dashboard-card";
import PostsTable from "@/components/posts/post-table";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={100} Icon={Newspaper} />
        <DashboardCard title="Categories" count={12} Icon={Folder} />
        <DashboardCard title="Users" count={750} Icon={User} />
        <DashboardCard title="Comments" count={100} Icon={MessageCircle} />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5}/>
    </div>
  );
}
