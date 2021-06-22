import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogModalComponent } from './dilog-modal.component';

describe('DilogModalComponent', () => {
  let component: DilogModalComponent;
  let fixture: ComponentFixture<DilogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
