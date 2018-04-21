import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  arrayList: any[] = [];
  searchData: string;

  constructor(private _listService: ListService) { }

  ngOnInit() {
    this.searchData = '';
    this.arrayList = this._listService.getList();
    console.log(this.arrayList);
  }

}
