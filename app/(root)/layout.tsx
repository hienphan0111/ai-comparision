import Navbar from "@/components/Navbar";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  <div className="h-full">
    {/* <Navbar /> */}
    <main className="md:pl-20 pt-16 h-full">
      {children}
    </main>
  </div>
}

export default RootLayout;
