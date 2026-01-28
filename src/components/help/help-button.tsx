"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronRight,
  Users,
  Link2,
  DollarSign,
  CreditCard,
  Settings,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Webhook,
  Copy,
  ExternalLink,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Set Up Your Program",
    icon: Settings,
    color: "emerald",
    content: [
      {
        subtitle: "Configure Your Settings",
        instructions: [
          "Go to Settings from the sidebar",
          "Set your commission rates (percentage or flat fee)",
          "Configure payout thresholds and schedules",
          "Add your business branding (logo, colors)",
          "Set up payment methods (PayPal, Stripe, Bank)",
        ],
      },
      {
        subtitle: "Define Commission Rules",
        instructions: [
          "One-time: Single payment per conversion",
          "Recurring: Ongoing commissions for subscriptions",
          "Tiered: Higher rates for top performers",
          "Lifetime: Commission for all future purchases",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Add Affiliates",
    icon: Users,
    color: "blue",
    content: [
      {
        subtitle: "Invite New Affiliates",
        instructions: [
          "Click 'Affiliates' in the sidebar",
          "Click 'Add Affiliate' button",
          "Enter their name, email, and commission tier",
          "A unique referral link is generated automatically",
          "Send them their link and tracking dashboard access",
        ],
      },
      {
        subtitle: "Affiliate Portal",
        instructions: [
          "Each affiliate gets their own portal",
          "They can view their referral link and stats",
          "Track clicks, conversions, and earnings",
          "Request payouts when threshold is met",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Track Referrals",
    icon: Link2,
    color: "purple",
    content: [
      {
        subtitle: "How Tracking Works",
        instructions: [
          "Affiliates share their unique referral link",
          "Clicks are tracked via URL parameters",
          "Cookies store the referral for 30-90 days",
          "Conversions are captured via webhook or API",
        ],
      },
      {
        subtitle: "View Referral Data",
        instructions: [
          "Go to 'Referrals' to see all tracked activity",
          "Filter by affiliate, date range, or status",
          "See click-to-conversion rates",
          "Export data for reporting",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Connect Go High Level",
    icon: Webhook,
    color: "teal",
    content: [
      {
        subtitle: "Set Up GHL Webhooks",
        instructions: [
          "Go to 'GHL Webhooks' in settings",
          "Copy your unique webhook URL",
          "In GHL, go to Settings → Webhooks",
          "Add a new webhook for 'Contact Created' or 'Order Placed'",
          "Paste your Refferq webhook URL",
        ],
      },
      {
        subtitle: null,
        isWarning: true,
        instructions: [
          "Important: Include the referral code in your GHL forms to track which affiliate sent the lead!",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Manage Commissions",
    icon: TrendingUp,
    color: "amber",
    content: [
      {
        subtitle: "Review Pending Commissions",
        instructions: [
          "Go to 'Commissions' to see all earnings",
          "New conversions appear as 'Pending'",
          "Review and approve commissions",
          "Handle disputes or adjustments",
        ],
      },
      {
        subtitle: "Commission Statuses",
        instructions: [
          "Pending: Awaiting approval",
          "Approved: Ready for payout",
          "Paid: Commission has been paid",
          "Cancelled: Refund or chargeback",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Process Payouts",
    icon: CreditCard,
    color: "pink",
    content: [
      {
        subtitle: "Payout Process",
        instructions: [
          "Go to 'Payouts' to see pending payments",
          "Review affiliate balances",
          "Process individual or bulk payouts",
          "Supports PayPal, Stripe, Bank Transfer, Wise",
        ],
      },
      {
        subtitle: "Payout Schedules",
        instructions: [
          "Configure NET-15 or NET-30 terms",
          "Set minimum payout thresholds",
          "Automated payouts available",
          "All transactions are logged",
        ],
      },
    ],
  },
];

const colorClasses: Record<string, string> = {
  teal: "bg-teal-500/20 text-teal-600 border-teal-500/30",
  blue: "bg-blue-500/20 text-blue-600 border-blue-500/30",
  emerald: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
  purple: "bg-purple-500/20 text-purple-600 border-purple-500/30",
  amber: "bg-amber-500/20 text-amber-600 border-amber-500/30",
  pink: "bg-pink-500/20 text-pink-600 border-pink-500/30",
};

const quickLinks = [
  { href: "/affiliates", label: "Affiliates", icon: Users, color: "blue" },
  { href: "/referrals", label: "Referrals", icon: Link2, color: "purple" },
  { href: "/commissions", label: "Commissions", icon: TrendingUp, color: "amber" },
  { href: "/settings/webhooks", label: "GHL Webhooks", icon: Webhook, color: "teal" },
];

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2"
        title="Getting Started Guide"
      >
        <HelpCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Help</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl">
                  Getting Started with Refferq
                </DialogTitle>
                <DialogDescription className="mt-1">
                  Follow these steps to set up your referral program
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 -mx-6 px-6 space-y-3">
            {/* Welcome Section */}
            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">Welcome to Refferq!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your complete referral and affiliate program management system with native GHL integration.
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <strong className="text-foreground">What it does:</strong>{" "}
                      Refferq lets you create and manage a professional affiliate program—track referrals,
                      calculate commissions, process payouts, and connect everything to your Go High Level workflows.
                    </p>
                    <p>
                      <strong className="text-foreground">Why it matters:</strong>{" "}
                      Referral programs generate 3-5x higher conversion rates than other channels.
                      Word-of-mouth from affiliates and happy customers is your most cost-effective growth engine.
                    </p>
                    <p>
                      <strong className="text-foreground">Example:</strong>{" "}
                      Add an affiliate partner, they share their unique link, a customer signs up through GHL,
                      the webhook fires, Refferq tracks the conversion, calculates a 20% commission, and queues the payout.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Part of The Master&apos;s Edge:</strong>{" "}
                      Pairs with Competitor Intel to see what referral offers competitors are running,
                      and CEO Dashboard to track your referral program&apos;s impact on overall revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {steps.map((step) => {
              const isExpanded = expandedStep === step.number;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-xl border bg-card/50 overflow-hidden"
                >
                  {/* Step Header */}
                  <button
                    onClick={() =>
                      setExpandedStep(isExpanded ? null : step.number)
                    }
                    className="w-full flex items-center gap-4 p-4 hover:bg-accent/50 transition-colors text-left"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl border ${colorClasses[step.color]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-medium">{step.title}</h3>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Step Content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-0 space-y-4">
                      {step.content.map((section, idx) => (
                        <div
                          key={idx}
                          className={section.isWarning ? "mt-2" : ""}
                        >
                          {section.isWarning ? (
                            <div className="flex gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-700 leading-relaxed">
                                {section.instructions[0]}
                              </p>
                            </div>
                          ) : (
                            <>
                              {section.subtitle && (
                                <h4 className="text-sm font-medium text-muted-foreground mb-2 ml-14">
                                  {section.subtitle}
                                </h4>
                              )}
                              <ul className="space-y-1.5 ml-14">
                                {section.instructions.map((instruction, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                                    <span>{instruction}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Links */}
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  const colorClass = colorClasses[link.color];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border hover:opacity-80 transition-colors ${colorClass}`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t -mx-6 px-6">
            <Button onClick={() => setOpen(false)} className="w-full">
              Got it, let&apos;s get started!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
