import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-7xl md:text-9xl text-emerald-200 mb-4">404</h1>
      <h2 className="font-display text-2xl md:text-3xl text-stone-800 mb-3">Page Not Found</h2>
      <p className="text-stone-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-7 py-3.5 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
}
