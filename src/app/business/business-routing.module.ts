import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessSidebarComponent } from './business-sidebar/business-sidebar.component';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { AuthGuard } from '../shared/auth-guard.service';
import { IntegrationsComponent } from './integrations/integrations.component';
import { LandingPageComponent } from './integrations/landing-page/landing-page.component';
import { ConnectGoogleBusinessComponent } from './integrations/connect-google-business/connect-google-business.component';
import { ConnectYelpBusinessComponent } from './integrations/connect-yelp-business/connect-yelp-business.component';
import { GoolgeReviewComponent } from './goolge-review/goolge-review.component';
import { YelpReviewComponent } from './yelp-review/yelp-review.component';

const routes: Routes = [
  { path: "", redirectTo: "admin", pathMatch: "full" },
  { path: "", component: BusinessSidebarComponent },
  {
    path: "admin",
    component: BusinessDashboardComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "integration",
    component: IntegrationsComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "integration/google-landing-page",
    component: LandingPageComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "integration/connect-google-business",
    component: ConnectGoogleBusinessComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "integration/connect-yelp-business",
    component: ConnectYelpBusinessComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "review/google",
    component: GoolgeReviewComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
  {
    path: "review/yelp",
    component: YelpReviewComponent,canActivate:[AuthGuard],
    pathMatch: "full",
    outlet: "sub_Menu",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
