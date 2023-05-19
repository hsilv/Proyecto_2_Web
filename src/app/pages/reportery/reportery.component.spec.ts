import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteryComponent } from './reportery.component';

describe('ReporteryComponent', () => {
  let component: ReporteryComponent;
  let fixture: ComponentFixture<ReporteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteryComponent]
    });
    fixture = TestBed.createComponent(ReporteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
