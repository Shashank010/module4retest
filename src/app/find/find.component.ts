import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/Student';
import { ServiceService } from '../student-service/service.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  searchObj:Student;
  constructor(private service:ServiceService) {
    this.searchObj=new Student();
   }

  ngOnInit() {
  }


  search(id:number){
    this.searchObj=this.service.searchOrder(id);
    return this.searchObj;
}
}
