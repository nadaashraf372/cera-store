import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "../components/RootLayout";
import Home from "../pages/Home";
import About from "../components/About";
import Collections from "../components/Collections";
import CollectionsPage from "../components/CollectionsPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="#about" element={<About />} />
      <Route path="#collections" element={<Collections />}>
        <Route path=":id" element={<CollectionsPage />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
