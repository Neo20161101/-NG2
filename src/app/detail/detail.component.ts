import {Component} from "@angular/core"
import {ActivatedRoute} from "@angular/router"
import {DetailService} from "./detail.service"

@Component({
    moduleId:module.id,
    selector:'detail',
    templateUrl:'detail.component.html',
    providers:[DetailService]
})

export class DetailComponent {
    getUrl:string;    
    dish:Object;
    detailService:DetailService;

    constructor(private _activatedRouter:ActivatedRoute ){
        this.dish = JSON.parse(localStorage.getItem('dish'));
    }
}

