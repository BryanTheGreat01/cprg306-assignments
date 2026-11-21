"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";



export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return user ? (
    <div>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
      <button onClick={firebaseSignOut}>Log out</button>
    </div>
  ) : (
    <button onClick={gitHubSignIn} className="bg-amber-400">Log in</button>
  );
}
