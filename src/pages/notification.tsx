import type { CustomNextPage } from "next";
import { DashboardLayout } from "@/layout";

const Notification: CustomNextPage = () => {
  return <div>Notification</div>;
};

Notification.getLayout = DashboardLayout;

export default Notification;