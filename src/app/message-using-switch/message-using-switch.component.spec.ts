import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageUsingSwitchComponent } from './message-using-switch.component';

describe('MessageUsingSwitchComponent', () => {
  let component: MessageUsingSwitchComponent;
  let fixture: ComponentFixture<MessageUsingSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageUsingSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageUsingSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
