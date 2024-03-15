// ProfessorsPage.tsx
import React, { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SideBar } from "../components/sideBar";
import { ProfessorCard } from "../components/professor-card";
import { api } from "../lib/axios";

//const professorsMockList = professorsListMock

const fetchProfessorsFromAPI = async () => {
  try {
    const response = await api.get('/professors'); // Substitua pela sua URL completa
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar professores:', error);
    return [];
  }
};

export const ProfessorsPage: React.FC = () => {

  const [professorsList, setProfessorsList] = useState([]);

  useEffect(() => {
    // Chama a função de busca quando o componente monta
    fetchProfessorsFromAPI().then((data) => setProfessorsList(data));
  }, []); // O segundo argumento do useEffect vazio faz com que ele execute apenas uma vez, sem depender de variáveis

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <main className="md:flex-1 p-6 md:flex gap-6 md:space-y-0 space-y-6">

        <SideBar></SideBar>

        <div className="flex flex-col flex-1 mb-6 md:mb-0 md:space-y-0 space-y-6 md:pl-3">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6g gap-4">
            {professorsList.map((professor, index) => (
              <ProfessorCard key={index} professor={professor}></ProfessorCard>
            ))}
          </div>
        </div>

      </main>

      <Footer></Footer>
      
    </div>
  )
}

