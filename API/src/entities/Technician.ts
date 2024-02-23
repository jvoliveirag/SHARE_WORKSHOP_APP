//import { uuid } from "uuidv4"
import { v4 as uuid } from 'uuid';

export class Technician {
  public readonly id: string

  public name: string
  public phoneNumber: string
  public email: string
  public address: string

  constructor(props: Omit<Technician, 'id'>, id?: string) {
    Object.assign(this, props)

    if(!id) {
      this.id = uuid() //removes the db's responsibility for specifying id ("abstracts" the infrastructure layer)
    }
  }
}