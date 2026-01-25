"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Search,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  MoreVertical,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

// Mock data
const commissions = [
  {
    id: "1",
    affiliateName: "Sarah Johnson",
    orderId: "ORD-001",
    orderValue: 150,
    commissionRate: 10,
    commissionAmount: 15,
    status: "pending",
    createdAt: "2024-01-15T11:45:00Z",
    approvedAt: null,
    paidAt: null,
  },
  {
    id: "2",
    affiliateName: "Mike Chen",
    orderId: "ORD-002",
    orderValue: 200,
    commissionRate: 10,
    commissionAmount: 20,
    status: "approved",
    createdAt: "2024-01-14T15:30:00Z",
    approvedAt: "2024-01-14T16:00:00Z",
    paidAt: null,
  },
  {
    id: "3",
    affiliateName: "Emily Davis",
    orderId: "ORD-003",
    orderValue: 75,
    commissionRate: 10,
    commissionAmount: 7.5,
    status: "paid",
    createdAt: "2024-01-10T10:00:00Z",
    approvedAt: "2024-01-10T12:00:00Z",
    paidAt: "2024-01-15T09:00:00Z",
  },
  {
    id: "4",
    affiliateName: "Sarah Johnson",
    orderId: "ORD-004",
    orderValue: 300,
    commissionRate: 10,
    commissionAmount: 30,
    status: "approved",
    createdAt: "2024-01-13T14:20:00Z",
    approvedAt: "2024-01-13T15:00:00Z",
    paidAt: null,
  },
  {
    id: "5",
    affiliateName: "Alex Thompson",
    orderId: "ORD-005",
    orderValue: 100,
    commissionRate: 10,
    commissionAmount: 10,
    status: "cancelled",
    createdAt: "2024-01-08T09:00:00Z",
    approvedAt: null,
    paidAt: null,
  },
];

export default function CommissionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCommissions = commissions.filter((commission) => {
    const matchesSearch =
      commission.affiliateName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      commission.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || commission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    pending: commissions
      .filter((c) => c.status === "pending")
      .reduce((sum, c) => sum + c.commissionAmount, 0),
    approved: commissions
      .filter((c) => c.status === "approved")
      .reduce((sum, c) => sum + c.commissionAmount, 0),
    paid: commissions
      .filter((c) => c.status === "paid")
      .reduce((sum, c) => sum + c.commissionAmount, 0),
    total: commissions.reduce((sum, c) => sum + c.commissionAmount, 0),
  };

  const approveCommission = (id: string) => {
    console.log("Approving commission:", id);
  };

  const cancelCommission = (id: string) => {
    console.log("Cancelling commission:", id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Commissions</h1>
        <p className="text-muted-foreground">
          Review and manage affiliate commissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {formatCurrency(stats.pending)}
            </div>
            <p className="text-xs text-muted-foreground">
              {commissions.filter((c) => c.status === "pending").length} commissions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {formatCurrency(stats.approved)}
            </div>
            <p className="text-xs text-muted-foreground">Ready for payout</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Out</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              {formatCurrency(stats.paid)}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Generated</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.total)}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search commissions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Tabs value={statusFilter} onValueChange={setStatusFilter}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Commissions List */}
      <Card>
        <CardHeader>
          <CardTitle>All Commissions</CardTitle>
          <CardDescription>
            Review pending commissions and process approvals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCommissions.map((commission) => (
              <div
                key={commission.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                    {commission.affiliateName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{commission.affiliateName}</p>
                    <p className="text-sm text-muted-foreground">
                      Order {commission.orderId} · {formatDate(commission.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Order Value</p>
                    <p className="text-sm font-medium">
                      {formatCurrency(commission.orderValue)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Commission ({commission.commissionRate}%)
                    </p>
                    <p className="text-sm font-semibold text-emerald-600">
                      {formatCurrency(commission.commissionAmount)}
                    </p>
                  </div>
                  <Badge
                    variant={
                      commission.status === "paid"
                        ? "success"
                        : commission.status === "approved"
                        ? "default"
                        : commission.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {commission.status}
                  </Badge>
                  {commission.status === "pending" && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => approveCommission(commission.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => cancelCommission(commission.id)}
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
