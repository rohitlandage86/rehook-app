import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  selectedRating: number = -1;
  isActive: boolean = false;
  businessName: string = '';
  iscard_rating = true;
  iscard_form = false;
  iscard_Qrcode =false;
  activeCard: string = '';
  constructor() { }
  ngOnInit() {
 this.Starrating();
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo); 
    this.businessName=businessInfo.business_name
  }
Starrating(){
  const stars = document.querySelectorAll('.fa-star');
  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      this.updateStarColors(index);
    });

    star.addEventListener('mouseout', () => {
      this.updateStarColors(this.selectedRating);
    });

    star.addEventListener('click', () => {
      this.selectedRating = index;
      this.updateStarColors(this.selectedRating);
    });
  });
}
  updateStarColors(rating: number): void {
    const stars = document.querySelectorAll('.fa-star');
    stars.forEach((star, index) => {
      if (index <= rating) {
        star.classList.add('hovered');
      } else {
        star.classList.remove('hovered');
      }
    });
  }
   //connect button 
   landingpage() {
    this.iscard_rating = true;
    this.iscard_form = false;
  
  }
  feedbackform(){
    this.iscard_rating = false;
    this.iscard_form = true;
   
  }
 
  handleCardClick(card: string) {
    this.activeCard = this.activeCard === card ? '' : card;
    if (card === 'landingpage') {
      this.landingpage();
    } else if (card === 'feedbackform') {
      this.feedbackform();
    }
  }
  }


