import { Injectable } from '@angular/core';
import { Router, Resolve,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Http} from "@angular/http"
import {DetailService} from "./detail.service"
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ResolveGuard implements Resolve<any> {
     getUrl:string;    
     dish:Object;
     
     
  	constructor(private route:Router,
      private detailService:DetailService) {};
  
  	resolve(route: ActivatedRouteSnapshot) {  
            this.getUrl = 
            'http://localhost/project-kfl/kfl_ng2/quickstart-master/src/app/data/dish_getbyid.php?id='
            +route.params['id'];
            this.detailService.getDetail(this.getUrl).subscribe(list => {
            this.dish = list[0];
            console.log(this.dish);
            return this.dish; 
        })
    };
}
