import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Technician } from "@/dtos/TechnicianDTO";
import { Plus } from "lucide-react";

type EditDialogProps = {
  technician: Technician;
};

export function TechnicianDetailsCardDialog({ technician }: EditDialogProps) {

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Plus className="h-6 w-6 cursor-pointer rounded-full bg-slate-200 p-1 bg-opacity-50 hover:bg-opacity-100" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{technician.name}</AlertDialogTitle>
          <AlertDialogDescription>
            Detalhes do professor.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
