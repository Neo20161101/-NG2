import {Component} from "@angular/core"
import  {Http} from "@angular/http"
import {Router} from "@angular/router"
import 'rxjs/add/operator/map';
import {MainService} from "./main.service"
import {DetailService} from "../detail/detail.service"
@Component({
    moduleId:module.id,
    selector:'main',
    templateUrl:'main.component.html',
    providers:[MainService]
})


export class MainComponent {
    dishList:Object[];
    mainSer:MainService;
    hasMore:boolean = true;
    
    getUrl = 'http://localhost/project-kfl/kfl_ng2/quickstart-master/src/app/data/dish_getbypage.php';  // URL to web API
    constructor(
         private detailService:DetailService,
        private _router:Router,
        private http:Http,private mainService:MainService){
        this.mainSer = mainService;
        mainService.getDishList(this.getUrl).subscribe(list => {
            this.dishList = list;
            console.log(this.dishList);
        });
    }

    loadMore=function(){
        this.mainSer
           .loadMore(this.getUrl+"/?start="+this.dishList.length).subscribe((list1:any) => {
                this.dishList = this.dishList.concat(list1);
                if(list1.length < 5)
                {
                    this.hasMore = false;
                }
        });
    }

    jumpToDetail = function(id:number){
            this.getUrl = 'http://localhost/project-kfl/kfl_ng2/quickstart-master/src/app/data/dish_getbyid.php?id='+id;  // URL to web API
            this.detailService.getDetail(this.getUrl).subscribe((list:any) => {
            this.dish = list[0];
            console.log(this.dish.toString());
            var str = JSON.stringify(this.dish);
            localStorage.setItem('id',id.toString());
            localStorage.setItem('dish',str);
            console.log(localStorage.getItem('dish'));
            
            this._router.navigateByUrl('/detail/'+id);
            });

        
    }
}

