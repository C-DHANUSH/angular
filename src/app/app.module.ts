import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { LoginComponent } from './login/login.component';
import { TaskListForComponent } from './task-list-for/task-list-for.component';
import { MessageUsingSwitchComponent } from './message-using-switch/message-using-switch.component';
import { StudentListParentComponent } from './student-list-parent/student-list-parent.component';
import { StudentDetailsChildComponent } from './student-details-child/student-details-child.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DetailsComponent,
    EventBindingComponent,
    LoginComponent,
    TaskListForComponent,
    MessageUsingSwitchComponent,
    StudentListParentComponent,
    StudentDetailsChildComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
