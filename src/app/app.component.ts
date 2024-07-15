import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rehook-app';
  showNavAndFooter: boolean = true;
  isDashboard= false;
  constructor(private router: Router,private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationEnd) {
        // Check if the current route is sign-up, login, or dashboard
        const authRoutes = ['auth/sign-up', 'auth/login','auth/connect-my-business'];
        const dashboardRoutes = ['dashboard','/business/(sub_Menu:admin)','business/(sub_Menu:integration)','integration/google-landing-page','business/(sub_Menu:review/google)','business/(sub_Menu:review/yelp)'];

        this.showNavAndFooter = !authRoutes.some(route => event.url.includes(route));
        this.isDashboard = dashboardRoutes.some(route => event.url.includes(route));
      // console.log('dashbooooord   ',dashboardRoutes.some(route => event.url.includes(route)));
      
        // if (localStorage.getItem("isLogin") === 'true' && event.url.includes('dashboard')) {
        //   this.isDashboard = true;
        // }
      }
    });

    this._sharedService.isLogin$.subscribe(value => {
      this.isDashboard = value;
    });
    console.log('dashboard',this.isDashboard );
    
  }

  ngAfterViewInit() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    if (navbarNav && navbarToggler) {
      navbarNav.addEventListener('show.bs.collapse', function() {
        navbarToggler.classList.add('hide');
      });

      navbarNav.addEventListener('hide.bs.collapse', function() {
        navbarToggler.classList.remove('hide');
      });
    }
  }
}
  