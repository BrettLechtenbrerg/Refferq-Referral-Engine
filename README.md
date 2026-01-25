# Refferq - Open Source Referral Engine

> **Powerful affiliate and referral program management with Go High Level integration**

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)

---

## Overview

Refferq is an open-source referral and affiliate management system designed for businesses using Go High Level (GHL). Track referrals, manage commissions, process payouts, and grow your business through partner marketing.

### Key Features

- **Affiliate Management** - Add, track, and manage unlimited affiliates
- **Referral Tracking** - Cookie-based attribution with customizable duration
- **Commission Calculator** - Percentage, flat-rate, or tiered commission structures
- **Payout Processing** - Support for PayPal, Stripe, Bank Transfer, and Wise
- **GHL Integration** - Native webhook support for Go High Level
- **Admin Dashboard** - Beautiful, responsive interface for managing your program
- **Affiliate Portal** - Self-service portal for affiliates to track their earnings
- **Built-in Help System** - Step-by-step guides and contextual help

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YourUsername/refferq-referral-engine.git

# Navigate to the project
cd refferq-referral-engine

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YourUsername/refferq-referral-engine)

---

## Go High Level Integration

Refferq integrates with Go High Level via webhooks. Here's how to set it up:

### 1. Get Your Webhook URL

Navigate to **Settings → GHL Webhooks** in Refferq to get your unique webhook URL.

### 2. Configure GHL Webhooks

1. In GHL, go to **Settings → Webhooks**
2. Click **Add New Webhook**
3. Paste your Refferq webhook URL
4. Select trigger: **Order Placed** or **Contact Created**
5. Save

### 3. Capture Referral Codes

Add this script to your landing pages:

```html
<script>
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');
  if (refCode) {
    document.cookie = "refferq_ref=" + refCode + ";path=/;max-age=" + (30*24*60*60);
    localStorage.setItem('refferq_ref', refCode);
  }
</script>
```

### 4. Add Hidden Form Field

Add a hidden field to your GHL forms named `refferq_ref` to pass the referral code with submissions.

---

## Features

### Dashboard
- Overview of program performance
- Total affiliates, referrals, and commissions
- Recent activity feed
- Top performer leaderboard
- Quick action buttons

### Affiliates
- Add and manage affiliates
- Generate unique referral codes
- Track individual performance
- Copy referral links with one click

### Referrals
- Track all clicks and conversions
- Filter by status, affiliate, or date
- View conversion funnel
- Export data for reporting

### Commissions
- Review pending commissions
- Approve or cancel with one click
- Track commission history
- Support for tiered rates

### Payouts
- View affiliate balances
- Process individual or bulk payouts
- Multiple payment methods
- Transaction history

### Settings
- Configure commission rates
- Set payout thresholds and schedules
- Customize tracking settings
- Manage payment methods

---

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React

---

## Project Structure

```
refferq-referral-engine/
├── src/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── affiliates/
│   │   │   ├── commissions/
│   │   │   ├── dashboard/
│   │   │   ├── guide/
│   │   │   ├── payouts/
│   │   │   ├── referrals/
│   │   │   └── settings/
│   │   │       └── webhooks/
│   │   ├── api/
│   │   │   └── webhooks/
│   │   │       └── ghl/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   ├── help/
│   │   └── ui/
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## Roadmap

- [ ] Database integration (Prisma + PostgreSQL)
- [ ] Authentication (Clerk or NextAuth)
- [ ] Email notifications
- [ ] Affiliate self-registration
- [ ] Marketing asset management
- [ ] API documentation
- [ ] Multi-currency support
- [ ] Fraud detection

---

## Part of The Master's Edge

Refferq is part of **The Master's Edge Business Program** - a collection of AI-powered tools for business mastery.

### Related Tools

- [Performance Review Pro](https://github.com/BrettLechtenbrerg/Performance-Review-Pro) - AI-powered performance reviews
- [Masters Edge Business Program](https://github.com/BrettLechtenbrerg/Masters-Edge-Business-Program) - Complete business toolkit

---

## License

MIT License - feel free to use this for your own projects!

---

## Support

For questions or suggestions, open an issue on GitHub.

---

*Built with Claude Code*
*Part of The Master's Edge Business Program*
*"Grow through partnerships."*
