
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
import { api } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

export function CreateDialog() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormValid = name && phoneNumber && email && address;
  
  const handleCreate = async () => {
    setIsSubmitting(true)

    try {
      await api.post("http://localhost:3333/professor/cadastrar", {
        name,
        phoneNumber,
        email,
        address,
      });

      alert('professor cadastrado com sucesso!')
      setIsSuccess(true)
      window.location.reload()

    } catch (error: any) {
      let errorMessage = "Erro ao cadastrar professor";

      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
  
      console.error("Erro ao cadastrar professor:", errorMessage)
      alert(errorMessage)
  
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full justify-center">
          <Plus className="mr-2 h-5 w-5" /> Cadastrar professor
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">Cadastrar professor</AlertDialogTitle>
          <AlertDialogDescription>
            Insira as informações solicitadas para adicionar um professor.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                required
                placeholder="Nome do professor"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                required
                placeholder="Telefone do professor"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                required
                placeholder="E-mail do professor"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Endereço *</Label>
              <Input
                id="address"
                required
                placeholder="Endereço do professor"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <p className="text-xs mt-2">* Campos obrigatórios</p>
          </div>
        </form>
        <AlertDialogFooter>
          {!isSuccess && (
            <>
              <AlertDialogCancel onClick={handleReset}>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleCreate} disabled={isSubmitting || !isFormValid}>
                Cadastrar
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
