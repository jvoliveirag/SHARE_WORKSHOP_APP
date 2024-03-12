import { List, Search } from "lucide-react";
import { CreateDialog } from "./create-technician-dialog";
import { Button } from "./ui/button";

export function SideBar() {

  return (
    <aside className="flex md:w-60 md:space-y-6">
      <div className="w-full items-center justify-center space-y-6">
        <Button className="w-full flex"> <List className="mr-2 h-5 w-5" /> <a href="/tecnicos">Listar professores</a></Button>
        <Button className="w-full flex"> <Search className="mr-2 h-5 w-5" /> <a href="/buscartecnico">Buscar um professor</a></Button>
        <CreateDialog></CreateDialog>
      </div>
    </aside>
  )
  
}