export default function UserDashboard() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">User Dashboard</h1>
      
      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Submit New Car</h2>
          <p>Add a new vehicle to the database.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Account Settings</h2>
          <p>Manage your account preferences.</p>
        </section>
      </div>
    </div>
  );
}
