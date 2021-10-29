import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListLinkComponent } from './icon-list-link.component';

describe('IconListLinkComponent', () => {
  let component: IconListLinkComponent;
  let fixture: ComponentFixture<IconListLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
