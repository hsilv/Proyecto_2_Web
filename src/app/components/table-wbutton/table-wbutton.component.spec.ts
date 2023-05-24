import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWButtonComponent } from './table-wbutton.component';

describe('TableWButtonComponent', () => {
  let component: TableWButtonComponent;
  let fixture: ComponentFixture<TableWButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWButtonComponent]
    });
    fixture = TestBed.createComponent(TableWButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
