import { Injectable } from "@angular/core";
import { Http, Response,RequestOptions } from "@angular/http";


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';




@Injectable()
export class SubmitService {

    constructor(private http: Http) { }
    sendToServer(getUrl: string): Observable<Object[]> { 

        return this.http.get(getUrl).map(this.extractData)
        // return this.http.post(getUrl, data)
        //     .map(this.extractData)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
}