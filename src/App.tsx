import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Outlet />
    </main>
  );
}

export default App;
