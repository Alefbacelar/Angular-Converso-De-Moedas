import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversoComponent } from './converso.component';

describe('ConversoComponent', () => {
  let component: ConversoComponent;
  let fixture: ComponentFixture<ConversoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
