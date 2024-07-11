import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { BusinessSidebarComponent } from './business-sidebar/business-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { IntegrationsComponent } from './integrations/integrations.component';
import { LandingPageComponent } from './integrations/landing-page/landing-page.component';
import { ConnectGoogleBusinessComponent } from './integrations/connect-google-business/connect-google-business.component';
import { ConnectYelpBusinessComponent } from './integrations/connect-yelp-business/connect-yelp-business.component';


@NgModule({
  declarations: [
    BusinessDashboardComponent,
    BusinessSidebarComponent,
    IntegrationsComponent,
    LandingPageComponent,
    ConnectGoogleBusinessComponent,
    ConnectYelpBusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
  ]
})
export class BusinessModule { }
