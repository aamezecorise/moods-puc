import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoodscameraPage } from './moodscamera.page';

describe('MoodscameraPage', () => {
  let component: MoodscameraPage;
  let fixture: ComponentFixture<MoodscameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodscameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoodscameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
