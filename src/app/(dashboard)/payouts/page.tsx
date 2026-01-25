"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CreditCard,
  Search,
  DollarSign,
  Clock,
  CheckCircle2,
  Send,
  Wallet,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

// Mock data
const affiliateBalances = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    pendingBalance: 45,
    approvedBalance: 125,
    totalPaid: 980,
    paymentMethod: "PayPal",
    paymentEmail: "sarah@paypal.com",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike@example.com",
    pendingBalance: 20,
    approvedBalance: 200,
    totalPaid: 750,
    paymentMethod: "Bank Transfer",
    paymentEmail: null,
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    pendingBalance: 15,
    approvedBalance: 75,
    totalPaid: 725,
    paymentMethod: "Stripe",
    paymentEmail: "emily@stripe.com",
  },
];

const payoutHistory = [
  {
    id: "1",
    affiliateName: "Emily Davis",
    amount: 320,
    method: "PayPal",
    status: "completed",
    processedAt: "2024-01-15T09:00:00Z",
    transactionId: "TXN-001",
  },
  {
    id: "2",
    affiliateName: "Sarah Johnson",
    amount: 250,
    method: "PayPal",
    status: "completed",
    processedAt: "2024-01-10T14:30:00Z",
    transactionId: "TXN-002",
  },
  {
    id: "3",
    affiliateName: "Mike Chen",
    amount: 180,
    method: "Bank Transfer",
    status: "processing",
    processedAt: "2024-01-14T11:00:00Z",
    transactionId: "TXN-003",
  },
];

export default function PayoutsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPayoutDialog, setShowPayoutDialog] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState<typeof affiliateBalances[0] | null>(null);

  const filteredBalances = affiliateBalances.filter(
    (affiliate) =>
      affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      affiliate.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    totalPending: affiliateBalances.reduce((sum, a) => sum + a.pendingBalance, 0),
    totalApproved: affiliateBalances.reduce((sum, a) => sum + a.approvedBalance, 0),
    totalPaid: affiliateBalances.reduce((sum, a) => sum + a.totalPaid, 0),
    affiliatesOwed: affiliateBalances.filter((a) => a.approvedBalance > 0).length,
  };

  const openPayoutDialog = (affiliate: typeof affiliateBalances[0]) => {
    setSelectedAffiliate(affiliate);
    setShowPayoutDialog(true);
  };

  const processPayout = () => {
    console.log("Processing payout for:", selectedAffiliate);
    setShowPayoutDialog(false);
    setSelectedAffiliate(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payouts</h1>
          <p className="text-muted-foreground">
            Process affiliate payments and view history
          </p>
        </div>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Process All Payouts
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {formatCurrency(stats.totalPending)}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready to Pay</CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {formatCurrency(stats.totalApproved)}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.affiliatesOwed} affiliates
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              {formatCurrency(stats.totalPaid)}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payout Threshold</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50.00</div>
            <p className="text-xs text-muted-foreground">Minimum balance</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search affiliates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Affiliate Balances */}
      <Card>
        <CardHeader>
          <CardTitle>Affiliate Balances</CardTitle>
          <CardDescription>
            Process individual payouts when affiliates meet the threshold
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBalances.map((affiliate) => (
              <div
                key={affiliate.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                    {affiliate.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{affiliate.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {affiliate.paymentMethod}
                      {affiliate.paymentEmail && ` · ${affiliate.paymentEmail}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-sm font-medium text-amber-600">
                      {formatCurrency(affiliate.pendingBalance)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Approved</p>
                    <p className="text-sm font-semibold text-emerald-600">
                      {formatCurrency(affiliate.approvedBalance)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="text-sm font-medium">
                      {formatCurrency(affiliate.totalPaid)}
                    </p>
                  </div>
                  <Button
                    onClick={() => openPayoutDialog(affiliate)}
                    disabled={affiliate.approvedBalance < 50}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payout History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payouts</CardTitle>
          <CardDescription>History of processed payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payoutHistory.map((payout) => (
              <div
                key={payout.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      payout.status === "completed"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{payout.affiliateName}</p>
                    <p className="text-sm text-muted-foreground">
                      {payout.transactionId} · {payout.method}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {formatCurrency(payout.amount)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(payout.processedAt)}
                    </p>
                  </div>
                  <Badge
                    variant={payout.status === "completed" ? "success" : "warning"}
                  >
                    {payout.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payout Dialog */}
      <Dialog open={showPayoutDialog} onOpenChange={setShowPayoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Process Payout</DialogTitle>
            <DialogDescription>
              Confirm payment to {selectedAffiliate?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedAffiliate && (
            <div className="space-y-4 py-4">
              <div className="p-4 rounded-lg bg-muted">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Affiliate</span>
                  <span className="font-medium">{selectedAffiliate.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium">
                    {selectedAffiliate.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold text-emerald-600">
                    {formatCurrency(selectedAffiliate.approvedBalance)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPayoutDialog(false)}>
              Cancel
            </Button>
            <Button onClick={processPayout}>
              <Send className="h-4 w-4 mr-2" />
              Process Payout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
