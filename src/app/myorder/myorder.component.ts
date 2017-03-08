import { Component } from "@angular/core"
import {MyOrderService} from "./myorder.service"
import  {Http} from "@angular/http"

@Component({
    moduleId: module.id,
    selector: 'myOrder',
    templateUrl: 'myorder.component.html'
})

export class MyOrderComponent {
    orderList:Object[];
    url = 'http://localhost/project-kfl/kfl_ng2/quickstart-master/src/app/data/order_getbyphone.php?phone='+localStorage.getItem("phone");  // URL to web API

    constructor(
        private myOrderService: MyOrderService,
        private http: Http){
            myOrderService.getOrder(this.url).subscribe((list:any) =>{
                console.log(list);
                this.orderList = list;
            })
        }       

}

