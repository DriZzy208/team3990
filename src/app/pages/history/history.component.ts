import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterViewInit {
  var element: any;
  
  ngAfterViewInit() {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      });
    }, options);

    observer.observe(this.timeline.nativeElement);
  }
}
