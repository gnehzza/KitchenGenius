import "./styles.css";
import { firebase, getFirestoreDB, getFirebaseAuth } from "./api/firebase";
import { genSignIn } from "./api/auth";

export default function App() {
  const db = getFirestoreDB(firebase);
  const auth = getFirebaseAuth(firebase);

  return (
    <div className="App">
      <div>
        <button
          onClick={async () => {
            await genSignIn(auth, db);
          }}
        >
          Sign In with Smoogle
        </button>
      </div>
    </div>
  );
}
