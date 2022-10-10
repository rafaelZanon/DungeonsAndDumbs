import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraumComponent } from './braum.component';

describe('BraumComponent', () => {
  let component: BraumComponent;
  let fixture: ComponentFixture<BraumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
