import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor(){}
  ngOnInit() {

  
  }
  // Function to show the content based on the contentId
  showContent(contentId: string): void {
    // Get all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      (section as HTMLElement).style.display = 'none';
    });

    // Get the content section to show
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
      (contentToShow as HTMLElement).style.display = 'block';
    }
  }

}
