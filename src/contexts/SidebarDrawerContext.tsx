import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure() // função do ChakraUI para realizar um Toogle no Menu
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath]) // semppre que a rota atual mudar, fechar o drawerSideBar

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)