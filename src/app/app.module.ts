import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {ProductService} from './shared/services/product.service';
import {UserService} from './shared/services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {TokenInterceptor} from './shared/interceptors/token.interceptor';
import {CreditCardDirectivesModule} from "angular-cc-library";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {CarouselModule} from "ngx-carousel-lib";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CarouselModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    CreditCardDirectivesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
