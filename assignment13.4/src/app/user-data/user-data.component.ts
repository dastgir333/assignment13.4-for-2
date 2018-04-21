import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
import { DropDownService } from 'app/service/drop-down.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  title: string;
  name: string;
  lastName: string;
  userDetail;

  genderArray: any[] = [];
  constructor(private _listService: ListService, private _dropDownService: DropDownService, private _router: Router) { }

  ngOnInit() {
    this.userModel()
    this.genderArray = this._dropDownService.getDropDown();
  }

  userModel() {
    return this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      genderType: '',
      date: ''
    }
  }
  submit(values) {

    const model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.gender,
      date: values.date
    }
    this._listService.addList(model);
    this._router.navigate(['/userList']);
  }

  canDeactivate() {
    console.log("Can Deactivate Fn",this.userDetail)
    if (this.userDetail.name !== ''
      || this.userDetail.lastName !== ''
      || this.userDetail.age !== ''
      || this.userDetail.genderType !== ''
      || this.userDetail.date !== '') {
      return window.confirm('Are you sure you don’t want to save the data?');
    }
    return true;
  };

}
