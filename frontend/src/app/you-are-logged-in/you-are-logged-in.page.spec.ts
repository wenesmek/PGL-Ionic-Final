import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YouAreLoggedInPage } from './you-are-logged-in.page';

describe('YouAreLoggedInPage', () => {
  let component: YouAreLoggedInPage;
  let fixture: ComponentFixture<YouAreLoggedInPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YouAreLoggedInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YouAreLoggedInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
