import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any);

export const NewCycleForm = () => {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);
  return (
    <>
      <h1>new cycle: {activeCycle}</h1>
      <button
        onClick={() => {
          setActiveCycle(2);
        }}
      >
        Alterar o ciclo ativo
      </button>
    </>
  );
};

export const Countdown = () => {
  const { activeCycle } = useContext(CyclesContext);
  return <h1>Countdown: {activeCycle} </h1>;
};

export const Home = () => {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
};
