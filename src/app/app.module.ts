import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CustomComponent} from './custom/custom.component';
import {AppComponent} from './app.component';
import {PassengerModule} from './containers/passenger-dashboard/passenger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PassengerModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
