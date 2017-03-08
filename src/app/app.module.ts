import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"

import { AppComponent }  from './app.component';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './myorder/myorder.component';
import {AppRoutingModule} from './app.router'
import { ResolveGuard } from './detail/data_guard'
import {DetailService} from './detail/detail.service'
import {SubmitService} from "./order/order.service"
import {MyOrderService} from "./myorder/myorder.service"

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ,HttpModule,FormsModule,CommonModule],
  declarations: [ AppComponent,StartComponent,MainComponent,DetailComponent,OrderComponent,MyOrderComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ResolveGuard,DetailService,SubmitService,MyOrderService]
})
export class AppModule { }
