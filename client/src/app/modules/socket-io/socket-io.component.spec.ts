import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketIoComponent } from './socket-io.component';

describe('SocketIoComponent', () => {
  let component: SocketIoComponent;
  let fixture: ComponentFixture<SocketIoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocketIoComponent]
    });
    fixture = TestBed.createComponent(SocketIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
