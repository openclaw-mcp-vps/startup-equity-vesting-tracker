import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EquityTrack – Startup Equity Vesting Tracker",
  description: "Track and visualize startup equity vesting schedules. Monitor cliff dates, vesting milestones, and tax implications in one dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2ef0536-133d-45d6-b922-06d2e7f303ec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
