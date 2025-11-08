export default function ModelPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Model Page</h1>
      
      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Photos</h2>
          <p>Vehicle photos will be displayed here.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
          <p>Technical specifications of the vehicle.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>Overview and summary of the vehicle.</p>
        </section>
      </div>
    </div>
  );
}
