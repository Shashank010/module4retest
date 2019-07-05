import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../Model/Student';
import { ServiceService } from '../student-service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  stuList : Student[] = [];

@Input() stu:Student;
@Input() isEdited=false;
@Output() edited=new EventEmitter();
  constructor(private service:ServiceService) { 
    this.stu=new Student();
  }
  ngOnInit() {
    this.stuList = this.service.getList();
  }
  
  addStudent(){
    this.service.addStudent(this.stu);
    this.stu=new Student();
  }

  update(){
    this.isEdited=false;
    this.stu=new Student();
    this.edited.emit();
  }

}
