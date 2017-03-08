import { Component,ApplicationRef  } from "@angular/core"
import {CommonModule} from "@angular/common"
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SubmitService} from './order.service'



@Component({
    moduleId: module.id,
    selector: 'order_com',
    templateUrl: 'order.component.html'
})

export class OrderComponent {
    order: Order = new Order;
    url:string;
    result:string="before";
    getResultFlag:boolean=false;;
    constructor(public ref: ApplicationRef,private http: Http,private submitService:SubmitService) {
        console.log(this.order);
    }

    submitOrder = function () {
         this.result = "下单失败";
        this.order.did = localStorage.getItem('id');
        console.log(this.order);
        var str = "user_name="+this.order.user_name+"&phone="+this.order.phone+"&sex="+this.order.sex+"&addr="+this.order.addr+"&did="+this.order.did;
       this.url = 'http://localhost/project-kfl/kfl_ng2/quickstart-master/src/app/data/order_add.php?'+str;
        this.submitService.sendToServer(this.url).subscribe(function(data:any){
            console.log(data);
            
            if(data[0].msg == 'succ')
            {
                localStorage.setItem("phone",this.order.phone);
                this.result = "下单成功，订单编号为"+data[0].did;
            }
            else
            {
                this.result = "下单失败"
            }
            console.log("get dao data"+this.result);
            this.ref.tick() 
            console.log(this.ref);
            this.getResultFlag = true;
        }.bind(this));
        
    }
}
export class Order {
    user_name: string;
    phone: string;
    sex: number;
    addr: string;
    did: number;
    
}




