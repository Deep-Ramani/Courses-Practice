import React from "react";
import { useRouter } from "next/router";
const ClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>This project of a given client</h1>
      <button>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
