import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Login from "../pages/Login";
import NewRecipe from "../pages/NewRecipe";
import RecipeList from "../pages/RecipeList";
import NavBar from "./NavBar";

function App() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <main>
      {user ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/new">
              <NewRecipe />
            </Route>
            <Route path="/home">
              <RecipeList />
            </Route>
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      )}
    </main>
  );
}

export default App;
