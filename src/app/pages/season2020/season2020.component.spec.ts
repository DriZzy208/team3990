import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season2020Component } from './season2020.component';

describe('Season2020Component', () => {
  let component: Season2020Component;
  let fixture: ComponentFixture<Season2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Season2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
