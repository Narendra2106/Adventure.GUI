import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as $ from 'jquery'
// import { FirstAdventureComponent } from './features/MyAdventure/adventure/first-adventure.component.component';


import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {MyAdventureService} from './features/services/my-adventure.service';
import { DecisionTreeComponent } from './features/MyAdventure/decision-tree/decision-tree/decision-tree.component';




@NgModule({
  declarations: [
    AppComponent,
    DecisionTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MyAdventureService,
    {provide: 'API_URL', useValue: 'http://localhost:5000/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
