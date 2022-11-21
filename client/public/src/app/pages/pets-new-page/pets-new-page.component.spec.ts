import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsNewPageComponent } from './pets-new-page.component';

describe('PetsNewPageComponent', () => {
  let component: PetsNewPageComponent;
  let fixture: ComponentFixture<PetsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
