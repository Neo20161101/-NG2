
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable"

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MyOrderService{
    constructor(private http:Http){};

    getOrder(url:string):Observable<Object[]>{
        return this.http.get(url)
        .map(this.extractData)
    }

    private extractData(res:Response){
        let body = res.json();
        return body;
    }
}