import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season2022Component } from './season2022.component';

describe('Season2022Component', () => {
  let component: Season2022Component;
  let fixture: ComponentFixture<Season2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Season2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
