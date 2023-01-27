import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season2019Component } from './season2019.component';

describe('Season2019Component', () => {
  let component: Season2019Component;
  let fixture: ComponentFixture<Season2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Season2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
