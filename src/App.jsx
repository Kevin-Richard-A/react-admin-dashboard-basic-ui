import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import { useState } from "react";

const App = () => {
  const [theme, colorMode] = useMode();
  const isMd = window.matchMedia("(max-width: 800px)").matches;
  const isSm = window.matchMedia("(max-width: 450px)").matches;
  const [toggled, setToggled] = useState(!isMd ? true : false);
  const [isCollapsed, setIsCollapsed] = useState(isSm ? true : false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const handleCollapse = (e, iscollapse) => {
    setIsCollapsed(iscollapse);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            isMd={isMd}
            isSm={isSm}
            toggled={toggled}
            handleToggle={handleToggle}
            isCollapsed={isCollapsed}
            handleCollapse={handleCollapse}
          />
          <main className="content" style={{ overflow: "auto" }}>
            <Topbar
              isMd={isMd}
              toggled={toggled}
              handleToggle={handleToggle}
              handleCollapse={handleCollapse}
            />
            <Routes>
              <Route path="/" element={<Dashboard isSm={isSm} />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
