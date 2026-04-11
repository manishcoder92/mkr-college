'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-md w-full border-t-4 border-[#800000]">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-center text-[#800000] mb-6">
          Admin Portal Login
        </h2>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center font-semibold">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Admin ID</label>
            <input
              type="text"
              className="w-full p-3 sm:p-3.5 border border-gray-300 rounded focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none text-base"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              autoComplete="username"
              autoCapitalize="none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 sm:p-3.5 border border-gray-300 rounded focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#800000] text-white font-bold py-3.5 px-4 rounded hover:bg-[#5C0000] transition-colors mt-4 shadow disabled:opacity-70 text-base active:scale-[0.98]"
          >
            {loading ? 'Verifying...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
