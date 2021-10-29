import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsTextComponent } from './fonts-text.component';

describe('FontsTextComponent', () => {
  let component: FontsTextComponent;
  let fixture: ComponentFixture<FontsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontsTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
