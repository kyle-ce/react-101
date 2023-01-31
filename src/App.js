import "./App.css";
import AppProvider from "./context/AppProvider";
import NavBar from "./pages/NavBar";
function App() {
  return (
    <AppProvider>
      <NavBar />
    </AppProvider>
  );
}

export default App;
