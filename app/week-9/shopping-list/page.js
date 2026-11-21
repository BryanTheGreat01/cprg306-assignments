import { useUserAuth } from "./_utils/auth-context";

await gitHubSignIn();

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);
    
    return (
        <div> 
            <h1 className="text-3xl font-bold text-center">
                Week 9 Assignment - Landing Page
            </h1>

            <p>
                {user ? (
                    <button className="bg-black text-white px-4 py-2 rounded" onCLick={firebaseSignOut}>
                        Sign Out
                    </button>
                ) : (
                    <button className="bg-black text-white px-4 py-2 rounded" onClick={gitHubSignIn}>
                        Sign In with GitHub
                    </button>
                )}
            </p>

            {user && (
                <p> Welcome, {user.displayName} ({user.email})</p>
            )}
        </div>
    )
};