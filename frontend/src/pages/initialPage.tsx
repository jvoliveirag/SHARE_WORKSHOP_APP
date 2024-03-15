// ProfessorsPage.tsx
import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SideBar } from "../components/sideBar";


export const InitialPage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <main className="md:flex-1 p-6 md:flex gap-6 md:space-y-0 space-y-6 justify-center items-center">
        
        <div className="block space-y-6 justify-center items-center bg-gray-300 bg-opacity-30 rounded-md p-6 border border-black">
          <h1 className="flex justify-center text-xl font-bold">Selecione uma opção</h1>
          <SideBar></SideBar>
        </div>

      </main>

      <Footer></Footer>
      
    </div>
  )
}

