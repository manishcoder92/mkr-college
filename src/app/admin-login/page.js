import AdminLoginForm from '@/components/AdminLoginForm';

export const metadata = {
  title: 'Admin Login | M.K.R. DR. G.R.D COLLEGE',
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-[80vh] bg-slate-50 py-12 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#800000]">Secure Portal</h1>
          <p className="mt-2 text-gray-600 font-medium">Authorized Personnel Only</p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
