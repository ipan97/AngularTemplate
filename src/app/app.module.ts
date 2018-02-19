import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule, RoutedComponents} from './app.routing.module';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
