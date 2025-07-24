import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditStudent } from './create-edit-student';

describe('CreateEditStudent', () => {
  let component: CreateEditStudent;
  let fixture: ComponentFixture<CreateEditStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
