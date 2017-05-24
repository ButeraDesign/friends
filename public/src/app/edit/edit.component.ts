import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  friend;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this.id = param.id;
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
    })
  }

  ngOnInit() {
    this._httpService.getFriend(this.id)
    .then( data => { this.friend = data;
      console.log(data) })
    .catch( err => { console.log(err); })
  }
  onUpdate(){
    console.log(this.friend);
    this._httpService.updateFriend(this.friend, this.id);

  }

}
