import {NgModule} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import { ModuleWithProviders } from "@angular/core";

import { AppComponent }  from './app.component';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './myorder/myorder.component';

import { ResolveGuard } from './detail/data_guard'

const appRoutes:Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'start',
        component:StartComponent
    },
    {
        path:'main',
        component:MainComponent
    },
    {
        
        path:'detail/:id',
        component:DetailComponent
    },
    {
        path:'order',
        component:OrderComponent
    },
    {
        path:'myorder',
        component:MyOrderComponent
    }
]


export const AppRoutingModule:ModuleWithProviders = 
RouterModule.forRoot(appRoutes);
 