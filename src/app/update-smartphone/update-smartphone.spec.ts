import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSmartphone } from './update-smartphone';

describe('UpdateSmartphone', () => {
  let component: UpdateSmartphone;
  let fixture: ComponentFixture<UpdateSmartphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSmartphone],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSmartphone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
