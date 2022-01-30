import axios from "axios";
import MainContent from "components/mainContent/MainContent";
import Navbar from "components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./userList.css";

export default function UserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = axios.get("/");
      console.log(response);
    };
  }, []);

  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
}
