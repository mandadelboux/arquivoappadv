import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcessosPage } from './processos.page';

describe('ProcessosPage', () => {
  let component: ProcessosPage;
  let fixture: ComponentFixture<ProcessosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
