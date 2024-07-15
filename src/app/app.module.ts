import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { QrCodeComponent } from './solutions/qr-code/qr-code.component';
import { ReviewBlockerComponent } from './solutions/review-blocker/review-blocker.component';
import { TextMarketingComponent } from './solutions/text-marketing/text-marketing.component';
import { UnifiedInboxComponent } from './solutions/unified-inbox/unified-inbox.component';
import { IntegrationsComponent } from './solutions/integrations/integrations.component';
import { ServicesComponent } from './services/services.component';
import { RetailServicesComponent } from './services/retail-services/retail-services.component';
import { HomeServicesComponent } from './services/home-services/home-services.component';
import { AutomotiveServicesComponent } from './services/automotive-services/automotive-services.component';
import { HealthcareServicesComponent } from './services/healthcare-services/healthcare-services.component';
import { PricingComponent } from './pricing/pricing.component';
import { SupportComponent } from './support/support.component';
import { BrowseByTopicComponent } from './support/browse-by-topic/browse-by-topic.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthInterceptor } from './shared/auth-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolutionsComponent,
    QrCodeComponent,
    ReviewBlockerComponent,
    TextMarketingComponent,
    UnifiedInboxComponent,
    IntegrationsComponent,
    ServicesComponent,
    RetailServicesComponent,
    HomeServicesComponent,
    AutomotiveServicesComponent,
    HealthcareServicesComponent,
    PricingComponent,
    SupportComponent,
    BrowseByTopicComponent,
    AboutUsComponent,
    TermsConditionsComponent,
    
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    GooglePlaceModule,
    NgxStarsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton:true
    }),
    



  ],
  providers: [ AuthGuard,
    Title,
    
    provideAnimations(), // required animations providers
    provideToastr(),
    //  provideAnimationsAsync(), // Toastr providers
  {  
    provide: HTTP_INTERCEPTORS,  
    useClass: AuthInterceptor,  
    multi: true  
  },
  { provide: LocationStrategy, useClass: HashLocationStrategy }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


