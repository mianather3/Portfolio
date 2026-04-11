import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Mian Ather Ali",
  description: "Full resume of Mian Ather Ali, Software Engineer",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
