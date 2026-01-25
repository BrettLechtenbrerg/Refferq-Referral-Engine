"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Link2,
  DollarSign,
  CreditCard,
  Settings,
  BookOpen,
  LayoutDashboard,
  Webhook,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Affiliates", href: "/affiliates", icon: Users },
  { name: "Referrals", href: "/referrals", icon: Link2 },
  { name: "Commissions", href: "/commissions", icon: TrendingUp },
  { name: "Payouts", href: "/payouts", icon: CreditCard },
  { name: "GHL Webhooks", href: "/settings/webhooks", icon: Webhook },
  { name: "Settings", href: "/settings", icon: Settings },
];

const helpNavigation = [
  { name: "Admin Guide", href: "/guide", icon: BookOpen },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50 bg-card border-r">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2 px-6 border-b">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Refferq
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="pt-6">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Help & Guides
          </p>
          <div className="mt-2 space-y-1">
            {helpNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/50 dark:to-indigo-950/50 p-4">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
            Need help?
          </p>
          <p className="mt-1 text-xs text-purple-700 dark:text-purple-300">
            Check out the Admin Guide for setup instructions and GHL integration.
          </p>
          <Link
            href="/guide"
            className="mt-3 inline-flex items-center text-xs font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400"
          >
            View Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
