import { ReactNode, createContext, useState, useContext } from "react";

export const PortalContext = createContext<{
  elementQueue: ReactNode[];
  teleport: (element: ReactNode) => void;
  telepop: () => void;
}>({
  elementQueue: [],
  teleport: (element: ReactNode) => {},
  telepop: () => {}
});

export const PortalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [elementQueue, setElementQueue] = useState<ReactNode[]>([]);

  const teleport = (element: ReactNode) => {
    // 添加元素
    setElementQueue([...elementQueue, element]);
  };
  const telepop = () => {
    const tmp = [...elementQueue];
    tmp.pop();
    setElementQueue(tmp);
  };

  return (
    <PortalContext.Provider
      value={{ elementQueue: elementQueue, teleport: teleport, telepop: telepop}}
    >
      {children}
    </PortalContext.Provider>
  );
};

type PortalPropsType = {
  children?: ReactNode;
};

const Portal = (props: PortalPropsType) => {
  const { children } = props;
  const { elementQueue } = useContext(PortalContext);
  console.log(elementQueue);
  return (
    <>
      {elementQueue}
      {children}
    </>
  );
};

export default Portal;
