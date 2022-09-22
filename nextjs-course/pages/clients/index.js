import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Deep" },
    { id: "ramani", name: "Ramani" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
