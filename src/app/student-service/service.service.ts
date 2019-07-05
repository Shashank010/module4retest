import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  stuList : Student[] = [];
 stuListArray:Student[];
  constructor() {

    this.stuList=[
    {

      // return this.stuList;
  
      Id:101,
      studName: 'Shashank',
      // public Dob: string;
       mobile: 9029502589,
       address: 'Mumbai'
  
    },
    {Id:103,
      studName: 'ritu',
      // public Dob: string;
       mobile: 9029502589,
       address: 'Mumbai'}
  ];
  }

  //add data in database
  addStudent(stu: Student) {console.log(stu)
    this.stuList.push(stu);
  }

  //return whole database
  getList(): Student[] {
  return this.stuList;
 
 
  

}
  //delete a entry
  deleteUser(index: number) {
    return this.stuList.splice(index, 1);
  }
  searchOrder(id:number){
    var result=this.stuList.find(x=>x.Id==id);
    if(result==null){
     return null;
    }else{
      return result;
    }
}
}