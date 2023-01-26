import { 
  FC, 
  createContext, 
  useEffect, 
  useState, 
  useMemo
} from "react";

interface IPasswordMenuContext {
  isOpen: boolean;
}

interface IPasswordMenuProps {
  children: React.ReactNode;
}

const PasswordContext = createContext({} as IPasswordMenuContext);

export const PasswordMenuContextProvider: FC<IPasswordMenuProps> = 
  ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
      const handleChange = (msg: any) => {
        if (msg.type === 'openPasswordMenu') {
          setIsOpen(msg.isOpen);
        }
      }

      chrome.runtime.onMessage.addListener(handleChange);
    }, [])

    const value = useMemo(() => ({ 
      isOpen 
    }), [isOpen])

    return (
      <PasswordContext.Provider value={value}>
        {children}
      </PasswordContext.Provider>
    );
}