import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Page } from "./components/Page";

function App() {
  return (
    <div className="w-screen h-screen ">
      <BrowserRouter basename="harry-potter-routing-demo">
        <Routes>
          <Route exact path="/" element={<Home />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
