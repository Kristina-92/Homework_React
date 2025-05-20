import React from "react";

export const Dropdown = ({ apps, onChange }) => {
  return (
    <p>
      <label>Choose App: </label>
      <select onChange={onChange}>
        {apps.map((app, i) => {
          return (
            <option key={i} value={app.value}>
              {app.name}
            </option>
          );
        })}
      </select>
    </p>
  );
};
