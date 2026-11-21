"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleSignIn = async () => {
    // Sign in to Firebase with GitHub authentication
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    // Sign out of Firebase
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <main className="mx-auto flex flex-col items-center gap-4 bg-gray-100 p-6">
        <div className="bg-white rounded p-6 flex flex-col items-center gap-4 shadow-sm">
          <h1 className="text-black text-2xl font-bold">Shopping List App</h1>
          <p className="text-gray-600">Please sign in to continue.</p>
          <button
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In with GitHub
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex flex-col items-center gap-4 bg-gray-100 p-6">
      <div className="bg-white rounded p-6 flex flex-col items-center gap-4 shadow-sm">
        <h1 className="text-black text-2xl font-bold">Shopping List App</h1>
        <p className="text-gray-600">
          Welcome, {user.displayName} ({user.email})
        </p>
        <div className="flex flex-row gap-3">
          <Link
            href="/week-9/shopping-list"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
  // Part 5: landing page ends
}
