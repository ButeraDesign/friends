import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx"

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveData() {

    return this._http.get('/friends').map(data=>data.json()).toPromise()

  }
  createFriend(friend){

    return this._http.post('/createFriend',friend).map(data=>data.json()).toPromise()

  }
  updateFriend(friend,id){
  console.log('updatefriend')
  return this._http.post('/editFriend/'+id,friend).map(data=>data.json()).toPromise()

  }

  getFriend(id){
    console.log("id",id)//id is a string
    return this._http.get('/showFriend/'+id).map(data=>data.json()).toPromise()


  }

}
