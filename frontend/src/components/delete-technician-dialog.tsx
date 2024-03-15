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
import { api } from "@/lib/axios";
import { Trash } from "lucide-react";

type EditDialogProps = {
  professor: Professor;
};

export function DeleteDialog({ professor }: EditDialogProps) {

  const email = professor.email

  const handleDelete = async () => {
    try {
      await api.delete(`http://localhost:3333/professor/deletar`, {
        data: {
          email
        }
      });
      
      alert("professor excluído com sucesso!");
      window.location.reload()

    } catch (error: any) {
      let errorMessage = "Erro desconhecido ao excluir professor";

      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }

      console.error("Erro ao excluir professor:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full" variant="outline">
          <Trash className="mr-2 h-4 w-4" /> Deletar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja deletar {professor.name} da lista?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não poderá ser desefeita e o professor será excluído permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
