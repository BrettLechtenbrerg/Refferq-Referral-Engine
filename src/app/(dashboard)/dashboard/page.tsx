import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Link2,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointerClick,
  Target,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

// Mock data - in production, this would come from your database
const stats = [
  {
    name: "Total Affiliates",
    value: "24",
    change: "+3",
    changeType: "positive",
    icon: Users,
    href: "/affiliates",
  },
  {
    name: "Active Referrals",
    value: "156",
    change: "+12%",
    changeType: "positive",
    icon: Link2,
    href: "/referrals",
  },
  {
    name: "Commissions This Month",
    value: "$4,320",
    change: "+18%",
    changeType: "positive",
    icon: TrendingUp,
    href: "/commissions",
  },
  {
    name: "Pending Payouts",
    value: "$1,850",
    change: "5 affiliates",
    changeType: "neutral",
    icon: CreditCard,
    href: "/payouts",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "conversion",
    affiliate: "Sarah Johnson",
    amount: "$75.00",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "signup",
    affiliate: "Mike Chen",
    amount: null,
    time: "5 hours ago",
    status: "active",
  },
  {
    id: 3,
    type: "payout",
    affiliate: "Emily Davis",
    amount: "$320.00",
    time: "1 day ago",
    status: "paid",
  },
  {
    id: 4,
    type: "conversion",
    affiliate: "Alex Thompson",
    amount: "$150.00",
    time: "1 day ago",
    status: "approved",
  },
  {
    id: 5,
    type: "conversion",
    affiliate: "Sarah Johnson",
    amount: "$50.00",
    time: "2 days ago",
    status: "approved",
  },
];

const topAffiliates = [
  { name: "Sarah Johnson", referrals: 45, earnings: "$1,125", conversionRate: "12.5%" },
  { name: "Mike Chen", referrals: 38, earnings: "$950", conversionRate: "10.2%" },
  { name: "Emily Davis", referrals: 32, earnings: "$800", conversionRate: "9.8%" },
  { name: "Alex Thompson", referrals: 28, earnings: "$700", conversionRate: "8.5%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your referral program performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  {stat.changeType === "positive" && (
                    <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                  )}
                  {stat.changeType === "negative" && (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={
                      stat.changeType === "positive"
                        ? "text-emerald-500"
                        : stat.changeType === "negative"
                        ? "text-red-500"
                        : ""
                    }
                  >
                    {stat.change}
                  </span>
                  {stat.changeType !== "neutral" && " from last month"}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest conversions and payouts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "conversion"
                          ? "bg-emerald-500"
                          : activity.type === "signup"
                          ? "bg-blue-500"
                          : "bg-purple-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium">{activity.affiliate}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.type === "conversion" && "New conversion"}
                        {activity.type === "signup" && "New affiliate"}
                        {activity.type === "payout" && "Payout processed"}
                        {" · "}
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {activity.amount && (
                      <span className="text-sm font-medium">
                        {activity.amount}
                      </span>
                    )}
                    <Badge
                      variant={
                        activity.status === "paid"
                          ? "success"
                          : activity.status === "approved"
                          ? "default"
                          : activity.status === "pending"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/referrals">
              <Button variant="ghost" className="w-full mt-4">
                View All Activity
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Top Affiliates */}
        <Card>
          <CardHeader>
            <CardTitle>Top Affiliates</CardTitle>
            <CardDescription>Best performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topAffiliates.map((affiliate, index) => (
                <div
                  key={affiliate.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{affiliate.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {affiliate.referrals} referrals · {affiliate.conversionRate} conversion
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">
                    {affiliate.earnings}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/affiliates">
              <Button variant="ghost" className="w-full mt-4">
                View All Affiliates
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for managing your program</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Link href="/affiliates?action=add">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Users className="h-5 w-5" />
                <span>Add Affiliate</span>
              </Button>
            </Link>
            <Link href="/payouts?action=process">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <CreditCard className="h-5 w-5" />
                <span>Process Payouts</span>
              </Button>
            </Link>
            <Link href="/commissions?filter=pending">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <DollarSign className="h-5 w-5" />
                <span>Review Commissions</span>
              </Button>
            </Link>
            <Link href="/settings/webhooks">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Target className="h-5 w-5" />
                <span>GHL Setup</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
