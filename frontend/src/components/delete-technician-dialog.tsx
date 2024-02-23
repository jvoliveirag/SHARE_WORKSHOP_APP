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
import { Technician } from "@/dtos/TechnicianDTO";
import { api } from "@/lib/axios";
import { Trash } from "lucide-react";

type EditDialogProps = {
  technician: Technician;
};

export function DeleteDialog({ technician }: EditDialogProps) {

  const email = technician.email

  const handleDelete = async () => {
    try {
      await api.delete(`http://localhost:3333/tecnico/deletar`, {
        data: {
          email
        }
      });
      
      alert("Técnico excluído com sucesso!");
      window.location.reload()

    } catch (error: any) {
      let errorMessage = "Erro desconhecido ao excluir técnico";

      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }

      console.error("Erro ao excluir técnico:", errorMessage);
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
          <AlertDialogTitle>Tem certeza que deseja deletar {technician.name} da lista?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não poderá ser desefeita e o técnico será excluído permanentemente.
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
