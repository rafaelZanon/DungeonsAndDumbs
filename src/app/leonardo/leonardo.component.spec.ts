import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonardoComponent } from './leonardo.component';

describe('LeonardoComponent', () => {
  let component: LeonardoComponent;
  let fixture: ComponentFixture<LeonardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeonardoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeonardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
