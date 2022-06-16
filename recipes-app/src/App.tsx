import Login from "./pages/Login/Login";
import { useUserContext } from "./shared/contexts/UserContext";
import RecipesList from "./pages/RecipesList/RecipesList";

function App() {
  const { user } = useUserContext();
  if (user) return <RecipesList />;
  return <Login />;
}

export default App;
