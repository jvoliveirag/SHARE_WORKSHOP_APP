
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Technician } from "@/dtos/TechnicianDTO"
import { cn } from "@/lib/utils"
import { DeleteDialog } from "./delete-technician-dialog"
import { EditDialog } from "./edit-technician-dialog"
import { TechnicianDetailsCardDialog } from "./technician-details-dialog"

type CardProps = React.ComponentProps<typeof Card> & {
  technician: Technician | null
}

export function TechnicianCard({ technician, className, ...props }: CardProps) {

  return (
    <Card className={cn("md:w-[320px] w-full", className)} {...props}>
      { technician ? (
        <>
          <CardHeader className="flex flex-1">
            <div className="flex gap-4">
              <CardTitle className="w-full">{technician.name.toUpperCase()} </CardTitle>
              <TechnicianDetailsCardDialog technician={technician}></TechnicianDetailsCardDialog>
            </div>
            
            <CardDescription>{technician.phoneNumber}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  E-mail: {technician.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  Endereço: {technician.address}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-center justify-center gap-4">
              <EditDialog technician={technician} ></EditDialog>
              <DeleteDialog technician={technician}></DeleteDialog>
            </div>
          </CardFooter>
        </>
      ) : (
        <p>professor não encontrado</p>
      )}  
    </Card>
  )
}
