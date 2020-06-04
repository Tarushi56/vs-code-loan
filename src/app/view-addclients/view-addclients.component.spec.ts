import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddclientsComponent } from './view-addclients.component';

describe('ViewAddclientsComponent', () => {
  let component: ViewAddclientsComponent;
  let fixture: ComponentFixture<ViewAddclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
