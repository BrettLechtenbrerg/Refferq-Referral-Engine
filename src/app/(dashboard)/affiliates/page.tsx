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
  Users,
  Plus,
  Search,
  Copy,
  ExternalLink,
  MoreVertical,
  Mail,
  TrendingUp,
  MousePointerClick,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency, generateReferralCode } from "@/lib/utils";

// Mock data
const affiliates = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    referralCode: "SARAH2024",
    status: "active",
    clicks: 450,
    conversions: 45,
    earnings: 1125,
    conversionRate: 10,
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike@example.com",
    referralCode: "MIKE2024",
    status: "active",
    clicks: 380,
    conversions: 38,
    earnings: 950,
    conversionRate: 10,
    joinedAt: "2024-02-01",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    referralCode: "EMILY2024",
    status: "active",
    clicks: 320,
    conversions: 32,
    earnings: 800,
    conversionRate: 10,
    joinedAt: "2024-02-15",
  },
  {
    id: "4",
    name: "Alex Thompson",
    email: "alex@example.com",
    referralCode: "ALEX2024",
    status: "pending",
    clicks: 0,
    conversions: 0,
    earnings: 0,
    conversionRate: 0,
    joinedAt: "2024-03-01",
  },
  {
    id: "5",
    name: "Jessica Williams",
    email: "jessica@example.com",
    referralCode: "JESS2024",
    status: "inactive",
    clicks: 150,
    conversions: 8,
    earnings: 200,
    conversionRate: 5.3,
    joinedAt: "2023-12-01",
  },
];

export default function AffiliatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [newAffiliate, setNewAffiliate] = useState({
    name: "",
    email: "",
    commissionRate: "10",
  });

  const filteredAffiliates = affiliates.filter(
    (affiliate) =>
      affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      affiliate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      affiliate.referralCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(`https://yoursite.com/?ref=${code}`);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleAddAffiliate = () => {
    // In production, this would call an API
    console.log("Adding affiliate:", newAffiliate);
    setShowAddDialog(false);
    setNewAffiliate({ name: "", email: "", commissionRate: "10" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Affiliates</h1>
          <p className="text-muted-foreground">
            Manage your affiliate partners and their performance
          </p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Affiliate
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Affiliates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliates.length}</div>
            <p className="text-xs text-muted-foreground">
              {affiliates.filter((a) => a.status === "active").length} active
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {affiliates.reduce((sum, a) => sum + a.clicks, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {affiliates.reduce((sum, a) => sum + a.conversions, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(affiliates.reduce((sum, a) => sum + a.earnings, 0))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search affiliates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Affiliates List */}
      <Card>
        <CardHeader>
          <CardTitle>All Affiliates</CardTitle>
          <CardDescription>
            Click on an affiliate to view their detailed performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAffiliates.map((affiliate) => (
              <div
                key={affiliate.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                    {affiliate.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{affiliate.name}</p>
                      <Badge
                        variant={
                          affiliate.status === "active"
                            ? "success"
                            : affiliate.status === "pending"
                            ? "warning"
                            : "secondary"
                        }
                      >
                        {affiliate.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {affiliate.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {affiliate.conversions} conversions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {affiliate.conversionRate}% rate
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-emerald-600">
                      {formatCurrency(affiliate.earnings)}
                    </p>
                    <p className="text-xs text-muted-foreground">earned</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(affiliate.referralCode)}
                    >
                      {copiedCode === affiliate.referralCode ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Affiliate Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Affiliate</DialogTitle>
            <DialogDescription>
              Create a new affiliate account and generate their referral link
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                placeholder="John Smith"
                value={newAffiliate.name}
                onChange={(e) =>
                  setNewAffiliate({ ...newAffiliate, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={newAffiliate.email}
                onChange={(e) =>
                  setNewAffiliate({ ...newAffiliate, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Commission Rate (%)</label>
              <Input
                type="number"
                placeholder="10"
                value={newAffiliate.commissionRate}
                onChange={(e) =>
                  setNewAffiliate({
                    ...newAffiliate,
                    commissionRate: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAffiliate}>Add Affiliate</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
