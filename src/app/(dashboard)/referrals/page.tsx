"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Link2,
  Search,
  MousePointerClick,
  Target,
  TrendingUp,
  Calendar,
  ExternalLink,
  Filter,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

// Mock data
const referrals = [
  {
    id: "1",
    affiliateName: "Sarah Johnson",
    affiliateCode: "SARAH2024",
    visitorId: "vis_abc123",
    source: "Instagram Bio",
    status: "converted",
    clickedAt: "2024-01-15T10:30:00Z",
    convertedAt: "2024-01-15T11:45:00Z",
    orderValue: 150,
    commission: 15,
  },
  {
    id: "2",
    affiliateName: "Mike Chen",
    affiliateCode: "MIKE2024",
    visitorId: "vis_def456",
    source: "YouTube Description",
    status: "converted",
    clickedAt: "2024-01-14T14:20:00Z",
    convertedAt: "2024-01-14T15:30:00Z",
    orderValue: 200,
    commission: 20,
  },
  {
    id: "3",
    affiliateName: "Sarah Johnson",
    affiliateCode: "SARAH2024",
    visitorId: "vis_ghi789",
    source: "Email Newsletter",
    status: "pending",
    clickedAt: "2024-01-15T09:00:00Z",
    convertedAt: null,
    orderValue: null,
    commission: null,
  },
  {
    id: "4",
    affiliateName: "Emily Davis",
    affiliateCode: "EMILY2024",
    visitorId: "vis_jkl012",
    source: "Blog Post",
    status: "converted",
    clickedAt: "2024-01-13T16:45:00Z",
    convertedAt: "2024-01-13T17:30:00Z",
    orderValue: 75,
    commission: 7.5,
  },
  {
    id: "5",
    affiliateName: "Alex Thompson",
    affiliateCode: "ALEX2024",
    visitorId: "vis_mno345",
    source: "Twitter",
    status: "expired",
    clickedAt: "2023-12-01T10:00:00Z",
    convertedAt: null,
    orderValue: null,
    commission: null,
  },
];

export default function ReferralsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredReferrals = referrals.filter((referral) => {
    const matchesSearch =
      referral.affiliateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.affiliateCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.source.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || referral.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalClicks: referrals.length,
    conversions: referrals.filter((r) => r.status === "converted").length,
    pending: referrals.filter((r) => r.status === "pending").length,
    conversionRate: (
      (referrals.filter((r) => r.status === "converted").length /
        referrals.length) *
      100
    ).toFixed(1),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Referrals</h1>
        <p className="text-muted-foreground">
          Track all referral clicks and conversions
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClicks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Link2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search referrals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Tabs value={statusFilter} onValueChange={setStatusFilter}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="converted">Converted</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Referrals List */}
      <Card>
        <CardHeader>
          <CardTitle>All Referrals</CardTitle>
          <CardDescription>
            Track the journey from click to conversion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReferrals.map((referral) => (
              <div
                key={referral.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      referral.status === "converted"
                        ? "bg-emerald-500"
                        : referral.status === "pending"
                        ? "bg-amber-500"
                        : "bg-gray-400"
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{referral.affiliateName}</p>
                      <Badge variant="outline">{referral.affiliateCode}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Source: {referral.source}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Clicked</p>
                    <p className="text-sm font-medium">
                      {formatDate(referral.clickedAt)}
                    </p>
                  </div>
                  {referral.convertedAt && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Converted</p>
                      <p className="text-sm font-medium">
                        {formatDate(referral.convertedAt)}
                      </p>
                    </div>
                  )}
                  {referral.orderValue && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Order</p>
                      <p className="text-sm font-medium">
                        {formatCurrency(referral.orderValue)}
                      </p>
                    </div>
                  )}
                  {referral.commission && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Commission</p>
                      <p className="text-sm font-medium text-emerald-600">
                        {formatCurrency(referral.commission)}
                      </p>
                    </div>
                  )}
                  <Badge
                    variant={
                      referral.status === "converted"
                        ? "success"
                        : referral.status === "pending"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {referral.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
