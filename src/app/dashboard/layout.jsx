"use client";

import Link from "next/link";
import {  signOut, useSession } from "next-auth/react";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <Link href="/dashboard/add-product" className="hover:text-green-400">
            Add Product
          </Link>
          <Link href="/products" className="hover:text-green-400">
            Products
          </Link>
          {session && (
            <button
              onClick={() => signOut()}
              className="mt-auto bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          )}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
