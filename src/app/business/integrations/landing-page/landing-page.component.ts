  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
  })
  export class LandingPageComponent implements OnInit {
    selectedRating: number = -1;
    form!: FormGroup;
    isActive: boolean = false;
    businessName: string = '';
    iscard_rating = true;
    iscard_form = false;
    iscard_Qrcode =false;
    activeCard: string = 'landingpage';
    constructor(private fb: FormBuilder,) { }
    ngOnInit() {
      let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
      console.log(businessInfo); 
      this.businessName=businessInfo.business_name
      this.createForm();
      this.landingpage();
    }
    ngAfterViewInit() {
      this.Starrating();
    }

    createForm() {
      this.form = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        contact_number: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        email_id: ['', [Validators.required, Validators.email]],
        message: [null, Validators.required],
      
      });

    }
    get controls() {
      return this.form.controls;
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
      this.iscard_Qrcode=false;
      this.Starrating();
    }
    feedbackform(){
      this.iscard_rating = false;
      this.iscard_form = true;
      this.iscard_Qrcode = false;

    }
    qrcodeform(){
      this.iscard_rating = false;
      this.iscard_form = false;
      this.iscard_Qrcode = true;
    }
  
    handleCardClick(card: string) {
      this.activeCard = this.activeCard === card ? '' : card;
      if (card === 'landingpage') {
        this.landingpage();
      } else if (card === 'feedbackform') {
        this.feedbackform();
      }else {
        this.qrcodeform();
      }
    }

    }


