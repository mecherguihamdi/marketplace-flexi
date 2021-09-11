import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelyneComponent } from './welyne.component';

describe('WelyneComponent', () => {
  let component: WelyneComponent;
  let fixture: ComponentFixture<WelyneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelyneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelyneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
