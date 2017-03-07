import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService{
   
    constructor(private http:Http){
        
    }
     
    getDetail (getUrl:string): Observable<Object[]> {
        return this.http.get(getUrl)
                    .map(this.extractData)
  }
   private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}