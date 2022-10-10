import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnubisComponent } from './annubis.component';

describe('AnnubisComponent', () => {
  let component: AnnubisComponent;
  let fixture: ComponentFixture<AnnubisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnubisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnubisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
