function App() {
  let cards = [
    { title: "Total Projects", value: 12, color: "bg-pink-100" },
    { title: "Active Tasks", value: 24, color: "bg-blue-100" },
    { title: "Completed", value: 8, color: "bg-pink-100" },
    { title: "Team Members", value: 6, color: "bg-blue-100" }
  ]

  let tasks = [
    { name: "Design Homepage", status: "In Progress" },
    { name: "Build Login Page", status: "Completed" },
    { name: "Update Dashboard", status: "Pending" },
    { name: "Fix Navigation", status: "In Progress" }
  ]

  let menu = ["Dashboard", "Projects", "Tasks", "Team", "Settings"]

  return (
    <div>
      <div className="bg-pink-400 text-white p-4">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>

      <div className="flex min-h-screen">
        <div className="bg-[#334155] text-white w-48 p-4 min-h-screen">
          <h2 className="text-2xl font-bold mb-6">
            PulseWorks AI
          </h2>

          <div className="space-y-4">
            {menu.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="flex-1 p-6 bg-[#F1F5F9]">
          <h2 className="text-3xl font-bold text-[#243B53]">
            Welcome back, Shafrin!
          </h2>

          <p className="mt-2 text-gray-500">
            Here's what's happening with your projects today.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {cards.map((item) => (
              <div
                key={item.title}
                className={`${item.color} p-4 rounded-lg shadow`}
              >
                <h2 className="text-gray-600">{item.title}</h2>
                <p className="text-2xl font-bold text-[#243B53]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h2 className="text-xl font-bold mb-4">Recent Tasks</h2>

            <div className="space-y-4">
              {tasks.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex justify-between p-3 rounded ${
                    index % 2 === 0 ? "bg-pink-100" : "bg-blue-100"
                  }`}
                >
                  <p>{item.name}</p>
                  <p>{item.status}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App