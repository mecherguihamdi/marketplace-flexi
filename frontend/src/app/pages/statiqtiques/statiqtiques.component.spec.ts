import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiqtiquesComponent } from './statiqtiques.component';

describe('StatiqtiquesComponent', () => {
  let component: StatiqtiquesComponent;
  let fixture: ComponentFixture<StatiqtiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatiqtiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatiqtiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
