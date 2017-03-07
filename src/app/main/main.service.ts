
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//  Observable 可观察对象
// 是一个包含来自未来、可以被使用的值或事件的集合

//  Observe 观察者
//  是一个知道如何监听、处理来自Observable的值的函数集合

//  Subscription 订阅：代表着Observable的执行动作，
//我们可以使用它来停止Observable继续执行

//  Operators  操作：一些列可以操作集合的pure function ,
//像是过滤、转换等

//  Subject 相当于一个时间发射器，
//是唯一能够向多个observe广播值的唯一手段


@Injectable()
export class MainService {
  
  constructor (private http: Http) {}
  getDishList (getUrl:string): Observable<Object[]> {
    return this.http.get(getUrl)
                    .map(this.extractData)
  }

  loadMore (getUrl:string): Observable<Object[]> {
    return this.http.get(getUrl)
                    .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}