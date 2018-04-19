import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'json' })
  };
@Injectable()
export class HelloService {
    private greetUrl = 'api/Hello';

    // Resolve HTTP using the constructor
    constructor(private _http: HttpClient) { }

    sayHello() {
        return this._http.get(this.greetUrl, httpOptions)
        .map((response) => {
            return response;
        });
    }

}
