"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Webhook,
  Copy,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  Code,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function WebhooksPage() {
  const [copied, setCopied] = useState<string | null>(null);

  // These would be generated per-account in production
  const webhookUrls = {
    conversion: "https://api.refferq.com/webhooks/ghl/conversion/YOUR_API_KEY",
    contact: "https://api.refferq.com/webhooks/ghl/contact/YOUR_API_KEY",
    order: "https://api.refferq.com/webhooks/ghl/order/YOUR_API_KEY",
  };

  const copyToClipboard = (key: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Go High Level Integration</h1>
        <p className="text-muted-foreground">
          Connect your GHL account to track referrals automatically
        </p>
      </div>

      {/* Quick Setup */}
      <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Quick Setup Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { step: "1", title: "Copy Webhook URL" },
              { step: "2", title: "Open GHL Settings" },
              { step: "3", title: "Add Webhook" },
              { step: "4", title: "Test Connection" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 font-bold mb-2">
                  {item.step}
                </div>
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Webhook URLs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="h-5 w-5" />
            Your Webhook URLs
          </CardTitle>
          <CardDescription>
            Copy these URLs and add them to your Go High Level webhook settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Conversion Webhook */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Conversion Webhook</label>
              <Badge variant="success">Recommended</Badge>
            </div>
            <div className="flex gap-2">
              <Input value={webhookUrls.conversion} readOnly className="font-mono text-sm" />
              <Button
                variant="outline"
                onClick={() => copyToClipboard("conversion", webhookUrls.conversion)}
              >
                {copied === "conversion" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Use this for tracking orders, purchases, and conversions
            </p>
          </div>

          <Separator />

          {/* Contact Created Webhook */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Contact Created Webhook</label>
            <div className="flex gap-2">
              <Input value={webhookUrls.contact} readOnly className="font-mono text-sm" />
              <Button
                variant="outline"
                onClick={() => copyToClipboard("contact", webhookUrls.contact)}
              >
                {copied === "contact" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Use this to track when a referred lead becomes a contact
            </p>
          </div>

          <Separator />

          {/* Order Placed Webhook */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Order Placed Webhook</label>
            <div className="flex gap-2">
              <Input value={webhookUrls.order} readOnly className="font-mono text-sm" />
              <Button
                variant="outline"
                onClick={() => copyToClipboard("order", webhookUrls.order)}
              >
                {copied === "order" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Use this to track e-commerce orders with order value
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step by Step Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Step-by-Step GHL Setup</CardTitle>
          <CardDescription>
            Follow these instructions to connect Go High Level
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                1
              </span>
              Copy Your Webhook URL
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Copy the &quot;Conversion Webhook&quot; URL above. This is your unique endpoint that will
              receive data from Go High Level.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Open GHL Settings
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-8">
              <li>Log into your Go High Level account</li>
              <li>Go to <strong>Settings</strong> (gear icon)</li>
              <li>Click <strong>Webhooks</strong> under &quot;Integrations&quot;</li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                3
              </span>
              Create New Webhook
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-8">
              <li>Click <strong>&quot;Add New Webhook&quot;</strong></li>
              <li>Give it a name (e.g., &quot;Refferq Conversions&quot;)</li>
              <li>Paste your webhook URL from Step 1</li>
              <li>Select the trigger event:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li><strong>Contact Created</strong> - for lead tracking</li>
                  <li><strong>Order Placed</strong> - for sales tracking</li>
                  <li><strong>Opportunity Status Changed</strong> - for pipeline tracking</li>
                </ul>
              </li>
              <li>Click <strong>Save</strong></li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                4
              </span>
              Add Referral Code to Forms
            </h4>
            <div className="ml-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                    Important: Track the Referral Code!
                  </p>
                  <p className="text-sm text-amber-600 mt-1">
                    To attribute conversions to the correct affiliate, you must capture the
                    referral code. Add a hidden field to your forms that captures the &quot;ref&quot;
                    URL parameter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Capturing Referral Codes
          </CardTitle>
          <CardDescription>
            Add this script to capture referral codes from URLs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 text-sm overflow-x-auto">
              <code>{`<!-- Add to your landing page -->
<script>
  // Get referral code from URL
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');

  if (refCode) {
    // Store in cookie for 30 days
    document.cookie = "refferq_ref=" + refCode +
      ";path=/;max-age=" + (30*24*60*60);

    // Also store in localStorage
    localStorage.setItem('refferq_ref', refCode);
  }
</script>`}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => {
                navigator.clipboard.writeText(`<!-- Add to your landing page -->
<script>
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');
  if (refCode) {
    document.cookie = "refferq_ref=" + refCode + ";path=/;max-age=" + (30*24*60*60);
    localStorage.setItem('refferq_ref', refCode);
  }
</script>`);
                setCopied("code");
                setTimeout(() => setCopied(null), 2000);
              }}
            >
              {copied === "code" ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-emerald-600" />
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm">
                <strong>Test with a real transaction</strong> - After setup, make a test
                purchase using a referral link to verify everything works.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm">
                <strong>Use UTM parameters</strong> - Add UTM tracking to your referral links
                for deeper analytics in GHL.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm">
                <strong>Check webhook logs</strong> - View recent webhook deliveries in GHL
                to troubleshoot any issues.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* External Links */}
      <Card>
        <CardHeader>
          <CardTitle>Helpful Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <a
                href="https://help.gohighlevel.com/support/solutions/articles/48001060529-webhooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                GHL Webhook Docs
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/guide" rel="noopener noreferrer">
                Full Admin Guide
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
