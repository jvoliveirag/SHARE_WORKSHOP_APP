// ProfessorsPage.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Professor } from "@/dtos/ProfessorDTO";
import { api } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProfessorCard } from "../components/professor-card";
import { SideBar } from "../components/sideBar";

export const FindProfessorPage: React.FC = () => {
  
  const [email, setEmail] = useState('')
  const [professor, setProfessor] = useState<Professor | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    try {
      const response = await api.get(`/professor/${email}`)
      setProfessor(response.data)
      setError(null)

    } catch (error) {
      setProfessor(null)
      setError('professor não encontrado')
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <main className="flex-1 p-6 md:flex gap-6 md:space-y-0 space-y-6">

        <SideBar></SideBar>

        <div className="md:flex md:flex-1 md:flex-col md:pr-80 mb-6 md:mb-0 md:space-y-0 space-y-6 md:pl-3">
          <form onSubmit={handleSubmit} className="md:flex mb-6 gap-4">
            <div className="grid w-full items-center gap-4">
              <div className="md:flex md:flex-col space-y-1.5">
                <Label htmlFor="email" className="font-bold md:text-xl">E-mail</Label>
                <Input
                  id="email"
                  required
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-8 align-baseline items-baseline">
              <Button type="submit" className="w-full">
                Buscar
                <Search className="w-4 h-4 ml-2"/>
              </Button>
            </div>
          </form>

          <div className="flex">
            {
              professor ? (
                <ProfessorCard professor={professor}></ProfessorCard>
              ) : 
                <p className="text-2xl">{error}</p>
            }
          </div>

        </div>

      </main>

      <Footer></Footer>
      
    </div>
  )
}


