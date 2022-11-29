import { ReactNode, createContext, useState, useContext } from "react";

type PortalGatesType = {
  [key: string]: ReactNode;
};

export const PortalContext = createContext({
  gates: {} as PortalGatesType,
  teleport: (gateName: string, element: ReactNode) => {},

});

export const PortalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [gates, setGates] = useState<PortalGatesType>({});

  const teleport = (gateName: string, element: ReactNode) => {
    setGates({ ...gates, [gateName]: element });
  };

  return (
    <PortalContext.Provider value={{ gates: gates, teleport: teleport }}>
      {children}
    </PortalContext.Provider>
  );
};

type PortalPropsType = {
  gateName: string;
  children: ReactNode;
};

const Portal = (props: PortalPropsType) => {
  const { gateName, children } = props;
  const { gates } = useContext(PortalContext);
  console.log(gates);
  return (
    <>
      {gates[gateName]}
      {children}
    </>
  );
};

export default Portal;
