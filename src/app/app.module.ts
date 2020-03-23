import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConvertGenderPipePipe } from './convert-gender-pipe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ConvertGenderPipePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
