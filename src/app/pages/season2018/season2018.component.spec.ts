import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season2018Component } from './season2018.component';

describe('Season2018Component', () => {
  let component: Season2018Component;
  let fixture: ComponentFixture<Season2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Season2018Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
