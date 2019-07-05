import { Component, OnInit } from '@angular/core';

import { Student } from '../model/Student';
import { ServiceService } from '../student-service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  stuList : Student[] = [];

  constructor(private userService : ServiceService, private router: Router) { }

  ngOnInit() {
    this.stuList = this.userService.getList();
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.userService.deleteUser(index); //delete from service
    }
  }

}
