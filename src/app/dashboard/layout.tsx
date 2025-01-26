import NavSection from "@/components/NavSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavSection />
      <div className="">{children}</div>
    </>
  );
}
