import React from "react";
import { Age } from "./components/Age";
import { Address } from "./components/Address";

const user1 = {
  userName: "Milko",
  lastName: "Milkovski",
  address: "Skopje",
  age: 14,
};

const user2 = {
  userName: "Maja",
  lastName: "Mihajlovska",
  address: "Ohrid",
  age: 22,
};

const user3 = {
  userName: "Gjorgji",
  lastName: "Gjorgjevski",
  address: "Skopje",
  age: 29,
};

const user4 = {
  userName: "Ivana",
  lastName: "Ivanovska",
  address: "Bitola",
  age: 17,
};

const users = [user1, user2, user3, user4];

export function App() {
  return (
    <div>
      <Age users={users} />
      <hr />
      <Address users={users} />
    </div>
  );
}
