import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Login / Register</h1>
      <p className="text-lg mb-6">Access your account or create a new one.</p>
      
      <div className="space-y-4">
        <div>
          <Link href="/register" className="text-blue-600 hover:underline text-lg">
            Register →
          </Link>
        </div>
        <div>
          <Link href="/admin" className="text-blue-600 hover:underline text-lg">
            Admin Dashboard →
          </Link>
        </div>
        <div>
          <Link href="/user" className="text-blue-600 hover:underline text-lg">
            User Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}
