"use client";

import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// Sign in to Firebase with GitHub authentication
await gitHubSignIn();

// Sign out of Firebase
await firebaseSignOut();

export default function Page() {
  return (
    <div>
      <p>
        {user ? (
          <button className="bg-slate-400 border-2" onClick={firebaseSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="bg-slate-400 border-2" onClick={gitHubSignIn}>
            Sign In
          </button>
        )}
      </p>

      {user && (
        <p>
          Welcome, {user.displayName}, Your email is {user.email}
        </p>
      )}
    </div>
  );
}
