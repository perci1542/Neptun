import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscipsionComponent } from './inscipsion.component';

describe('InscipsionComponent', () => {
  let component: InscipsionComponent;
  let fixture: ComponentFixture<InscipsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscipsionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscipsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
