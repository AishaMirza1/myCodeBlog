import { Outlet } from "react-router-dom";

export default function MainComponentsContainer() {
  return (
    <div style={{ backgroundColor: "orange", width: "90vw" }}>
      <Outlet />
    </div>
  );
}
