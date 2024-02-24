import styled from "styled-components";
import { MainLayout } from "./styles/layout";
import Orb from "./Components/orb/Orb";
import Navigation from "./Components/navigation/Navigation";
import { useMemo, useState } from "react";
import Income from "./Components/income/Income";
import Dashboard from "./Components/dashboard/Dashboard";
import Expenses from "./Components/expenses/Expenses";
import { useGlobalContext } from "./context/gobalContext";
import History from "./Components/history/history";

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <History />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;
