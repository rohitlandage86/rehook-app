import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
   //Home page routing
{
  path:"",
  component:HomeComponent,
  pathMatch: "full",
  // canActivate:[AuthGuard]
},
  {
    path: "auth",
    loadChildren: () =>
      import("../app/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "business",
    loadChildren: () =>
      import("./business/business.module").then((m) => m.BusinessModule),
  },

//Solution page routing
{
  path:"solutions",
  component:SolutionsComponent
},
//QrCode page routing
{
  path:"solutions/qr-code",
  component:QrCodeComponent
},
//Review Blocker page routing
{
  path:"solutions/review-blocker",
  component:ReviewBlockerComponent
},
//text marketing page routing
{
  path:"solutions/text-marketing",
  component:TextMarketingComponent
},
//unified inbox page routing
{
  path:"solutions/unified-inbox",
  component:UnifiedInboxComponent
},
//integrations page routing
{
  path:"solutions/integrations",
  component:IntegrationsComponent
},
//services page routing
{
  path:"services",
  component:ServicesComponent
},
//retail-services page routing
{
  path:"services/retail-services",
  component:RetailServicesComponent
},
//home-services page routing
{
  path:"services/home-services",
  component:HomeServicesComponent
},
//automotive-services page routing
{
  path:"services/automotive-services",
  component:AutomotiveServicesComponent
},
//healthcare-services page routing
{
  path:"services/healthcare-services",
  component:HealthcareServicesComponent
},
//Pricing page routing
{
  path:"pricing",
  component:PricingComponent
},
//support page routing
{
  path:"support",
  component:SupportComponent
},
//browse-by-topic  page routing
{
  path:"support/browse-by-topic",
  component:BrowseByTopicComponent
},
//about-us page routing
{
  path:"about-us",
  component:AboutUsComponent
},
//terms-conditions page routing
{
  path:"terms-conditions",
  component:TermsConditionsComponent
},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
