import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Page } from "./components/Page";

function App() {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="houses"
          element={
            <Page
              url={"https://wizard-world-api.herokuapp.com/Houses"}
              title="Houses"
            />
          }
        />
        <Route
          path="wizards"
          element={
            <Page
              url="https://wizard-world-api.herokuapp.com/Wizards"
              title="Wizards"
            ></Page>
          }
        />
        <Route
          path="spells"
          element={
            <Page
              url="https://wizard-world-api.herokuapp.com/Spells"
              title="Spells"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
