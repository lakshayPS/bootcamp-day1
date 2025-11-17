import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      Welcome to dashboard
      <nav>
        <Link to="counter">Counter</Link>{" "}
        <Link to="digitalWatch">Digital Watch</Link>
      </nav>
      <p>Select a page from above.</p>
      <Outlet />
    </div>
  );
}
export default Dashboard;
