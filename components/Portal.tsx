import React, {
  ReactNode,
  useRef,
  createContext,
  useState,
  useContext,
} from "react";

type ContextType = {
  currentElement: ReactNode;
  teleport: (element: ReactNode) => void;
  telepop: () => void;
};

export const PortalContext = createContext<ContextType>({
  currentElement: null,
  teleport: (_element: ReactNode) => {},
  telepop: () => {},
});

export const PortalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const elementQueue = useRef<ReactNode[]>([]);
  // FIXME:
  const [currentElement, setCurrentElement] = useState<ReactNode>(
    elementQueue.current[1]
  );

  const teleport = (element: ReactNode) => {
    // 添加元素
    elementQueue.current.push(element);
    setCurrentElement(elementQueue.current[0]);
  };
  const telepop = () => {
    // 移除首个元素
    elementQueue.current.shift();
    setCurrentElement(elementQueue.current[0]);
  };

  return (
    <PortalContext.Provider
      value={{
        currentElement: currentElement,
        teleport: teleport,
        telepop: telepop,
      }}
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
  const { currentElement } = useContext(PortalContext);
  return (
    <>
      {currentElement}
      {children}
    </>
  );
};

export default Portal;
