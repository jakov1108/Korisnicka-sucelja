export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Edit Models</h2>
          <p>Manage and edit vehicle models in the database.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">View Submissions</h2>
          <p>Review user-submitted vehicles.</p>
        </section>
      </div>
    </div>
  );
}
