import React from "react";
import Header from "../header/Header";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <Header />
      {children}
    </section>
  );
};

export default Container;
