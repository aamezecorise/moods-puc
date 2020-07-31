import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GifmodalPage } from './gifmodal.page';

describe('GifmodalPage', () => {
  let component: GifmodalPage;
  let fixture: ComponentFixture<GifmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GifmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
