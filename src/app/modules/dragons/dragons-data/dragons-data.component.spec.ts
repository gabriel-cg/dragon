import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsDataComponent } from './dragons-data.component';

describe('DragonsDataComponent', () => {
  let component: DragonsDataComponent;
  let fixture: ComponentFixture<DragonsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
