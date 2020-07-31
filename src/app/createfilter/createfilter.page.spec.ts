import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatefilterPage } from './createfilter.page';

describe('CreatefilterPage', () => {
  let component: CreatefilterPage;
  let fixture: ComponentFixture<CreatefilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatefilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
