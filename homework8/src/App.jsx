import React from "react";
import { Nav } from "./components/Nav";
import { Outlet } from "react-router";

export function App() {
  return (
    <div id="app">
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
