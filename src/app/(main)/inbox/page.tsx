import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import InboxLayout from "@/components/inbox/InboxLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Email, EmailLabel } from "@/lib/types/types";
import React from "react";

const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Julia Jalal",
    subject: "Our Bachelor of Commerce program is AACSB-accredited.",
    time: "7:52 PM",
    label: EmailLabel.Primary,
  },
  {
    id: "2",
    sender: "Harvey Manning",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "7:52 PM",
    label: EmailLabel.Social,
  },
  {
    id: "3",
    sender: "Peter Lewis",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    label: EmailLabel.Work,
  },
  // ...daha çox email əlavə edə bilərsən
];

const InboxPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Inbox" />
      <InboxLayout emails={mockEmails} />
    </DashboardLayout>
  );
};

export default InboxPage;
