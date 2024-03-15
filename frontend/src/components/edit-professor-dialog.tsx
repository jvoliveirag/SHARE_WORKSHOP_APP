
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Professor } from "@/dtos/ProfessorDTO";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { Edit } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

type EditDialogProps = {
  professor: Professor;
};

export function EditDialog({ professor }: EditDialogProps) {

  const [name, setName] = useState(professor.name);
  const [phoneNumber, setPhoneNumber] = useState(professor.phoneNumber);
  const [address, setAddress] = useState(professor.address);

  const isFormValid = name && phoneNumber && address;

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:3333/professor/editar/${professor.email}`, {
        name,
        phoneNumber,
        address,
      });

      alert("professor editado com sucesso!");
      window.location.reload();
      
    } catch (error: any) {
      let errorMessage = "Erro desconhecido ao editar professor";

      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }

      console.error("Erro ao editar professor:", errorMessage);
      alert(errorMessage);
    }
  };
  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">
          <Edit className="mr-2 h-4 w-4" /> Editar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">Editar professor</AlertDialogTitle>
          <AlertDialogDescription>
            Ajuste as informações como desejado e clique em "Salvar" para confirmar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required placeholder={professor.name} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">Telefone</Label>
              <Input id="phoneNumber" required placeholder={professor.phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" disabled placeholder={professor.email} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" required placeholder={professor.address} value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleEdit} disabled={!isFormValid}>Salvar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
