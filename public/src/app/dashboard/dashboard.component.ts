import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myFriends = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

      this._httpService.retrieveData()
      .then( data => { this.myFriends = data;
        console.log(data) })
      .catch( err => { console.log(err); })

  }

}
