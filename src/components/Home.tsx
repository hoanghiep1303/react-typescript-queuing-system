import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
  return (
    <div className="text-center">
      <p>Home Page (Protected by Firebase!)</p>
      <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
    </div>
  );
};

export default HomePage;
