import Link from "next/link";

export default function CTAButton({ href, children }) {
  return (
    <Link
      href={href}
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    >
      {children}
    </Link>
  );
}
