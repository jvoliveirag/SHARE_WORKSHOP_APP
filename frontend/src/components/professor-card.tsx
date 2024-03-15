
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Professor } from "@/dtos/ProfessorDTO"
import { cn } from "@/lib/utils"
import { DeleteDialog } from "./delete-professor-dialog"
import { EditDialog } from "./edit-professor-dialog"
import { ProfessorDetailsCardDialog } from "./professor-details-dialog"

type CardProps = React.ComponentProps<typeof Card> & {
  professor: Professor | null
}

export function ProfessorCard({ professor, className, ...props }: CardProps) {

  return (
    <Card className={cn("md:w-[320px] w-full", className)} {...props}>
      { professor ? (
        <>
          <CardHeader className="flex flex-1">
            <div className="flex gap-4">
              <CardTitle className="w-full">{professor.name.toUpperCase()} </CardTitle>
              <ProfessorDetailsCardDialog professor={professor}></ProfessorDetailsCardDialog>
            </div>
            
            <CardDescription>{professor.phoneNumber}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  E-mail: {professor.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  Endereço: {professor.address}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-center justify-center gap-4">
              <EditDialog professor={professor} ></EditDialog>
              <DeleteDialog professor={professor}></DeleteDialog>
            </div>
          </CardFooter>
        </>
      ) : (
        <p>professor não encontrado</p>
      )}  
    </Card>
  )
}
