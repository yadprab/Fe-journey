import { Helmet } from "react-helmet";
import Roadmap from "./Components/Roadmap/Roadmap";
const t = {
  title: "Frontend Roadmap",
};
function App() {
  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>
      <Roadmap />
    </>
  );
}

export default App;
