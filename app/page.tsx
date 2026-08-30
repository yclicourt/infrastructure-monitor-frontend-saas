import React, { ReactNode } from "react";
import { Background } from "./components/common/Background";

const HomePage = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <div>
        <Background>{children}</Background>
      </div>
    </>
  );
};

export default HomePage;
