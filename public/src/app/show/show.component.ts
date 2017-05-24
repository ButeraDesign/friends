import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id;
  oneFriend;

  constructor(private _httpService: HttpService,private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this.id = param.id;
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
    })
  }


  ngOnInit() {
    this._httpService.getFriend(this.id)
    .then( data => { this.oneFriend = data;
      console.log(data) })
    .catch( err => { console.log(err); })
  }

}
