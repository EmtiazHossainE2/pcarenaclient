import Header from "@/Shared/Header";
import Footer from "../Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen  justify-between flex flex-col ">
      <div className="bg-gray-600 sticky top-0 z-10">
        <Header></Header>
      </div>

      {/* main */}
      <main className="px-[5%]   md:my-16  mb-auto">{children}</main>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
