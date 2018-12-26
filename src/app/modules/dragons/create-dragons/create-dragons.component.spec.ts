import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDragonsComponent } from './create-dragons.component';

describe('CreateDragonsComponent', () => {
  let component: CreateDragonsComponent;
  let fixture: ComponentFixture<CreateDragonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDragonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
