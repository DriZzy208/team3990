import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseComponent } from './cause.component';

describe('CauseComponent', () => {
  let component: CauseComponent;
  let fixture: ComponentFixture<CauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
