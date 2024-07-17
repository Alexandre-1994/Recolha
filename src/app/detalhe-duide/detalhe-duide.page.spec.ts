import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheDuidePage } from './detalhe-duide.page';

describe('DetalheDuidePage', () => {
  let component: DetalheDuidePage;
  let fixture: ComponentFixture<DetalheDuidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
