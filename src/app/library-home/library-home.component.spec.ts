import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryHomeComponent } from './library-home.component';

describe('LibraryHomeComponent', () => {
  let component: LibraryHomeComponent;
  let fixture: ComponentFixture<LibraryHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryHomeComponent]
    });
    fixture = TestBed.createComponent(LibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});