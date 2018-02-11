import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvatarComponent } from './modal-avatar.component';

describe('ModalAvatarComponent', () => {
  let component: ModalAvatarComponent;
  let fixture: ComponentFixture<ModalAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
