import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  friend ={firstName:'',lastName:'',bday:''};


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.friend);
    this._httpService.createFriend(this.friend);
  
  }

}
