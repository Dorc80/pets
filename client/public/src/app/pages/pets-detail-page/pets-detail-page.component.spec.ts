import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDetailPageComponent } from './pets-detail-page.component';

describe('PetsDetailPageComponent', () => {
  let component: PetsDetailPageComponent;
  let fixture: ComponentFixture<PetsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
