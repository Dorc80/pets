import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsEditPageComponent } from './pets-edit-page.component';

describe('PetsEditPageComponent', () => {
  let component: PetsEditPageComponent;
  let fixture: ComponentFixture<PetsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
