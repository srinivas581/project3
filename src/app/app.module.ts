import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterComponent } from './register/register.component';
import { FbookComponent } from './fbook/fbook.component';
import { TwtrComponent } from './twtr/twtr.component';
import { InstaComponent } from './insta/insta.component';

const router:Routes=[
  {path:"app",component:AppComponent},
  {path:"f",component:FirstpageComponent},
  {path:"h",component:HomeComponent},
  {path:"r",component:RegisterComponent},
  {path:"fbook",component:FbookComponent},
  {path:"twtr",component:TwtrComponent},
  {path:"insta",component:InstaComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstpageComponent,
    RegisterComponent,
    FbookComponent,
    TwtrComponent,
    InstaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
