import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Users,
  Link2,
  DollarSign,
  CreditCard,
  Settings,
  Webhook,
  Play,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Target,
  ArrowRight,
  Zap,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
          <BookOpen className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Admin Guide</h1>
            <Badge className="bg-purple-600">Complete Setup</Badge>
          </div>
          <p className="text-muted-foreground">
            Step-by-step instructions for running your referral program
          </p>
        </div>
      </div>

      {/* Quick Start Overview */}
      <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-purple-600" />
            Quick Start Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-7">
            {[
              { step: "1", title: "Configure", icon: Settings },
              { step: "2", title: "Add Affiliates", icon: Users },
              { step: "3", title: "Connect GHL", icon: Webhook },
              { step: "4", title: "Share Links", icon: Link2 },
              { step: "5", title: "Track Referrals", icon: Target },
              { step: "6", title: "Approve", icon: TrendingUp },
              { step: "7", title: "Pay Out", icon: CreditCard },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 font-bold mb-2">
                  {item.step}
                </div>
                <item.icon className="w-6 h-6 text-purple-600 mb-2" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Initial Configuration */}
      <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-emerald-600" />
            Step 1: Configure Your Program
          </CardTitle>
          <CardDescription>
            Set up commission rates, payout rules, and tracking settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Navigate to Settings</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
              <li>Click <strong>Settings</strong> in the sidebar</li>
              <li>Configure your <strong>Commission Structure</strong>:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Default commission rate (e.g., 10%)</li>
                  <li>Commission type: Percentage, Flat fee, or Tiered</li>
                  <li>Recurring commissions for subscriptions (optional)</li>
                </ul>
              </li>
              <li>Set up <strong>Payout Rules</strong>:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Minimum payout threshold (e.g., $50)</li>
                  <li>Payout schedule: NET-15, NET-30, Weekly, Monthly</li>
                  <li>Payment methods: PayPal, Stripe, Bank, Wise</li>
                </ul>
              </li>
              <li>Configure <strong>Tracking Settings</strong>:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Cookie duration (30-90 days recommended)</li>
                  <li>Referral link format</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="flex gap-3">
            <Link href="/settings">
              <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Settings className="w-4 h-4 mr-2" />
                Go to Settings
              </Button>
            </Link>
          </div>

          <div className="flex items-start gap-2 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
            <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-emerald-700 dark:text-emerald-400">Pro Tip:</strong>{" "}
              <span className="text-emerald-600">
                Start with a simple percentage-based commission (10-20%) before implementing tiered structures.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Add Affiliates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Step 2: Add Your Affiliates
          </CardTitle>
          <CardDescription>
            Invite partners and generate their unique referral links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Adding a New Affiliate</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
              <li>Go to <strong>Affiliates</strong> in the sidebar</li>
              <li>Click <strong>&quot;Add Affiliate&quot;</strong> button (top right)</li>
              <li>Fill in affiliate details:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li><strong>Name:</strong> Affiliate&apos;s full name</li>
                  <li><strong>Email:</strong> Their email address</li>
                  <li><strong>Commission Rate:</strong> Their specific rate (or use default)</li>
                </ul>
              </li>
              <li>A <strong>unique referral code</strong> is generated automatically</li>
              <li>Send them their referral link and portal access</li>
            </ol>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-semibold">What Affiliates Receive</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
              <li><strong>Unique referral link:</strong> yoursite.com/?ref=CODE</li>
              <li><strong>Portal access:</strong> To track their clicks, conversions, and earnings</li>
              <li><strong>Marketing materials:</strong> Banners, copy, and resources (optional)</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link href="/affiliates">
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Go to Affiliates
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Connect GHL */}
      <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="w-5 h-5 text-teal-600" />
            Step 3: Connect Go High Level
          </CardTitle>
          <CardDescription>
            Set up webhooks to automatically track conversions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Webhook Setup</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
              <li>Go to <strong>Settings → GHL Webhooks</strong></li>
              <li>Copy your <strong>Conversion Webhook URL</strong></li>
              <li>In GHL, navigate to <strong>Settings → Webhooks</strong></li>
              <li>Click <strong>&quot;Add New Webhook&quot;</strong></li>
              <li>Paste your webhook URL</li>
              <li>Select trigger: <strong>Order Placed</strong> or <strong>Contact Created</strong></li>
              <li>Click <strong>Save</strong></li>
            </ol>
          </div>

          <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-amber-700 dark:text-amber-400">Important:</strong>{" "}
              <span className="text-amber-600">
                You must capture the referral code in your forms! Add the tracking script to your landing pages.
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/settings/webhooks">
              <Button variant="default" size="sm" className="bg-teal-600 hover:bg-teal-700">
                <Webhook className="w-4 h-4 mr-2" />
                Set Up Webhooks
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Tracking Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Step 4: Add Tracking to Your Site
          </CardTitle>
          <CardDescription>
            Capture referral codes when visitors land on your site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Add This Script to Your Landing Pages</h4>
            <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 text-sm overflow-x-auto">
              <code>{`<script>
  // Capture referral code from URL
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');

  if (refCode) {
    // Store in cookie (30 days)
    document.cookie = "refferq_ref=" + refCode +
      ";path=/;max-age=" + (30*24*60*60);

    // Store in localStorage backup
    localStorage.setItem('refferq_ref', refCode);
  }
</script>`}</code>
            </pre>
          </div>

          <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-blue-700 dark:text-blue-400">Tip:</strong>{" "}
              <span className="text-blue-600">
                Also add a hidden form field named &quot;refferq_ref&quot; to your GHL forms to pass the code with submissions.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 5: Monitor Referrals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Step 5: Monitor Referrals
          </CardTitle>
          <CardDescription>
            Track clicks, conversions, and attribution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
            <li>Go to <strong>Referrals</strong> in the sidebar</li>
            <li>View all referral activity:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>Clicks:</strong> When someone uses a referral link</li>
                <li><strong>Pending:</strong> Awaiting conversion</li>
                <li><strong>Converted:</strong> Successfully made a purchase</li>
                <li><strong>Expired:</strong> Cookie expired without conversion</li>
              </ul>
            </li>
            <li>Filter by affiliate, date range, or status</li>
            <li>Export data for reporting</li>
          </ol>

          <div className="flex gap-3">
            <Link href="/referrals">
              <Button variant="outline" size="sm">
                <Link2 className="w-4 h-4 mr-2" />
                View Referrals
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Step 6: Approve Commissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            Step 6: Review & Approve Commissions
          </CardTitle>
          <CardDescription>
            Verify conversions and approve affiliate earnings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
            <li>Go to <strong>Commissions</strong> in the sidebar</li>
            <li>Review <strong>Pending</strong> commissions</li>
            <li>Verify each conversion is legitimate:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Check order details in GHL</li>
                <li>Verify it&apos;s not a fraudulent or refunded order</li>
                <li>Confirm the referral attribution is correct</li>
              </ul>
            </li>
            <li>Click <strong>Approve</strong> to move to payout queue</li>
            <li>Or <strong>Cancel</strong> if fraudulent/invalid</li>
          </ol>

          <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-green-700 dark:text-green-400">Best Practice:</strong>{" "}
              <span className="text-green-600">
                Wait until the refund period passes (7-30 days) before approving commissions to avoid paying for refunded orders.
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/commissions">
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Review Commissions
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Step 7: Process Payouts */}
      <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            Step 7: Process Payouts
          </CardTitle>
          <CardDescription>
            Pay your affiliates their earned commissions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
            <li>Go to <strong>Payouts</strong> in the sidebar</li>
            <li>View affiliates with <strong>Ready to Pay</strong> balances</li>
            <li>Affiliates must meet the <strong>minimum threshold</strong></li>
            <li>Click <strong>Pay</strong> next to an affiliate, or</li>
            <li>Click <strong>Process All Payouts</strong> for bulk payment</li>
            <li>Confirm the payout details and method</li>
            <li>Process via PayPal, Stripe, Bank, or Wise</li>
          </ol>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-semibold">Payout Schedule Options</h4>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border">
                <p className="font-medium">NET-15</p>
                <p className="text-sm text-muted-foreground">Pay 15 days after approval</p>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border">
                <p className="font-medium">NET-30</p>
                <p className="text-sm text-muted-foreground">Pay 30 days after approval</p>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border">
                <p className="font-medium">Weekly</p>
                <p className="text-sm text-muted-foreground">Every Friday</p>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border">
                <p className="font-medium">Monthly</p>
                <p className="text-sm text-muted-foreground">1st of each month</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/payouts">
              <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <CreditCard className="w-4 h-4 mr-2" />
                Process Payouts
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Tips & Best Practices */}
      <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-green-600" />
            Tips & Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Do</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Set clear commission terms upfront</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Pay affiliates on time, every time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Provide marketing materials and resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Communicate program changes in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Reward top performers with bonuses</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Don&apos;t</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Pay before the refund period ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Change commission rates retroactively</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Ignore affiliate questions or concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Set unrealistic payout thresholds</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Delay payments without communication</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-gray-600" />
            Quick Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard">
              <Button variant="outline">
                <Zap className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/affiliates">
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Affiliates
              </Button>
            </Link>
            <Link href="/settings/webhooks">
              <Button variant="outline">
                <Webhook className="w-4 h-4 mr-2" />
                GHL Webhooks
              </Button>
            </Link>
            <Link href="/commissions">
              <Button variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Commissions
              </Button>
            </Link>
            <Link href="/payouts">
              <Button variant="outline">
                <CreditCard className="w-4 h-4 mr-2" />
                Payouts
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
