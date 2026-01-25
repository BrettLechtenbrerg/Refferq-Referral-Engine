"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  DollarSign,
  Percent,
  Clock,
  Building2,
  CreditCard,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    companyName: "My Company",
    defaultCommissionRate: "10",
    commissionType: "percentage",
    cookieDuration: "30",
    payoutThreshold: "50",
    payoutSchedule: "NET-30",
  });

  const handleSave = () => {
    console.log("Saving settings:", settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your referral program
          </p>
        </div>
        <Button onClick={handleSave}>
          {saved ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-500" />
              Saved!
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="commissions">Commissions</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Settings
              </CardTitle>
              <CardDescription>
                Basic information about your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    value={settings.companyName}
                    onChange={(e) =>
                      setSettings({ ...settings, companyName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Referral Link Base URL</label>
                  <Input
                    value="https://yoursite.com"
                    placeholder="https://yoursite.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Tracking Settings
              </CardTitle>
              <CardDescription>
                Configure how referrals are tracked
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cookie Duration (days)</label>
                <Input
                  type="number"
                  value={settings.cookieDuration}
                  onChange={(e) =>
                    setSettings({ ...settings, cookieDuration: e.target.value })
                  }
                />
                <p className="text-xs text-muted-foreground">
                  How long a referral will be credited to an affiliate after clicking their link
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Commission Settings */}
        <TabsContent value="commissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5" />
                Commission Structure
              </CardTitle>
              <CardDescription>
                Define how affiliates earn commissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Default Commission Rate</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={settings.defaultCommissionRate}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          defaultCommissionRate: e.target.value,
                        })
                      }
                    />
                    <span className="text-muted-foreground">%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Commission Type</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={settings.commissionType}
                    onChange={(e) =>
                      setSettings({ ...settings, commissionType: e.target.value })
                    }
                  >
                    <option value="percentage">Percentage of Sale</option>
                    <option value="flat">Flat Rate per Sale</option>
                    <option value="tiered">Tiered (by performance)</option>
                  </select>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-3">Commission Tiers (Optional)</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted">
                    <Badge>Bronze</Badge>
                    <span className="text-sm">0-10 conversions</span>
                    <span className="ml-auto font-medium">10%</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted">
                    <Badge className="bg-gray-400">Silver</Badge>
                    <span className="text-sm">11-50 conversions</span>
                    <span className="ml-auto font-medium">12%</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted">
                    <Badge className="bg-amber-500">Gold</Badge>
                    <span className="text-sm">51+ conversions</span>
                    <span className="ml-auto font-medium">15%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payout Settings */}
        <TabsContent value="payouts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payout Configuration
              </CardTitle>
              <CardDescription>
                Configure when and how affiliates get paid
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Payout Threshold</label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={settings.payoutThreshold}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          payoutThreshold: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Payout Schedule</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={settings.payoutSchedule}
                    onChange={(e) =>
                      setSettings({ ...settings, payoutSchedule: e.target.value })
                    }
                  >
                    <option value="NET-15">NET-15 (15 days after approval)</option>
                    <option value="NET-30">NET-30 (30 days after approval)</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="manual">Manual Only</option>
                  </select>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-3">Payment Methods</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg border">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>PayPal</span>
                    <Badge variant="success" className="ml-auto">Active</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>Stripe</span>
                    <Badge variant="success" className="ml-auto">Active</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>Bank Transfer</span>
                    <Badge variant="success" className="ml-auto">Active</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>Wise</span>
                    <Badge variant="success" className="ml-auto">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
