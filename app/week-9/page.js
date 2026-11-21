
"use client";

import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";
import { gitHubSignIn, logOut } from "./_utils/firebase";

export default function Page() {
  const { user, loading } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub login failed:", error);
      alert("Unable to sign in. Please try again.");
    }
  }

  async function handleLogout() {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to log out. Please try again.");
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-lg w-full">

        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          Week 9 Shopping List
        </h1>

        {!user ? (
          <div>
            <p className="text-slate-600 mb-6">
              Please sign in with GitHub to access your shopping list.
            </p>

            <button
              onClick={handleLogin}
              className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Sign in with GitHub
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Welcome, {user.displayName || user.email}!
            </h2>

            <p className="text-slate-600 mb-6">
              You are successfully signed in.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/week-9/shopping-list"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
