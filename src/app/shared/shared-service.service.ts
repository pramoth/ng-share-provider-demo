
export class SharedServiceService {
  public msg:string
  constructor() { 
    this.msg = 'SharedServiceService create at :'+new Date()
    console.log(this.msg)
  }
}
