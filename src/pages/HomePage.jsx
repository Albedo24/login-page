import React from "react";
import Navbar from "../components/Navbar";

export default function HomePage(props) {
  console.log("in homepage", props);
  return (
    <>
      <Navbar {...props} />;
    </>
  );
}
