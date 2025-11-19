import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
imports: [CommonModule], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'home';

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = id;
  }

  // Scroll-Spy: Detect section in viewport
  @HostListener('window:scroll', [])
  onScroll() {
    for (let item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = item.id;
        }
      }
    }
  }

}
