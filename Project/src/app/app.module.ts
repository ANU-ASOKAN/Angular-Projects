import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormModule } from './modules/form/form.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    UsersModule
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
