import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// Sign in to Firebase with GitHub authentication
await gitHubSignIn();

// Sign out of Firebase
await firebaseSignOut();

// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;

// Part 5: landing page ends

//.env.local starts
NEXT_PUBLIC_FIREBASE_API_KEY = ""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = ""
NEXT_PUBLIC_FIREBASE_PROJECT_ID = ""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = ""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = ""
NEXT_PUBLIC_FIREBASE_APP_ID = ""