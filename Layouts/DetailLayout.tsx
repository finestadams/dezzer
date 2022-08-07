import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DetailLayout;
