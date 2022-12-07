import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { heroesModule } from './Heroes/heroes.module';



@NgModule({
    declarations: [
        AppComponent,
        
       

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,    
         heroesModule,
        ContadorModule
        
    ]
})
export class AppModule { }
