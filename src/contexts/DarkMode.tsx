import {createContext, useState,ReactNode} from 'react';

export type DarkMode = 'light' |'dark';

interface DarkContextType{
    mode:DarkMode;
    toggleMode: ()=>void;

}

export const DarkModeContext = createContext<DarkContextType|undefined>(undefined);

interface DarkModeProviderProps {
    children : ReactNode;
}

export function DarkModeProvider({children}:DarkModeProviderProps){
    const [mode, setDarkMode] = useState<DarkMode>('light');
      const toggleMode = () => {
    setDarkMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };
    return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};