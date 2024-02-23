// TecnicosPage.tsx
import React, { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SideBar } from "../components/sideBar";
import { TechnicianCard } from "../components/technician-card";
import { api } from "../lib/axios";

//const techniciansMockList = techniciansListMock

const fetchTechniciansFromAPI = async () => {
  try {
    const response = await api.get('/tecnicos'); // Substitua pela sua URL completa
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar técnicos:', error);
    return [];
  }
};

export const TechniciansPage: React.FC = () => {

  const [techniciansList, setTechniciansList] = useState([]);

  useEffect(() => {
    // Chama a função de busca quando o componente monta
    fetchTechniciansFromAPI().then((data) => setTechniciansList(data));
  }, []); // O segundo argumento do useEffect vazio faz com que ele execute apenas uma vez, sem depender de variáveis

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <main className="md:flex-1 p-6 md:flex gap-6 md:space-y-0 space-y-6">

        <SideBar></SideBar>

        <div className="flex flex-col flex-1 mb-6 md:mb-0 md:space-y-0 space-y-6 md:pl-3">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6g gap-4">
            {techniciansList.map((technician, index) => (
              <TechnicianCard key={index} technician={technician}></TechnicianCard>
            ))}
          </div>
        </div>

      </main>

      <Footer></Footer>
      
    </div>
  )
}

