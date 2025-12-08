import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_360px] gap-8">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
