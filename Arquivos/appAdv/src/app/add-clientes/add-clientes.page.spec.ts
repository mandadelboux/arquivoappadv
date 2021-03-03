import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddClientesPage } from './add-clientes.page';

describe('AddClientesPage', () => {
  let component: AddClientesPage;
  let fixture: ComponentFixture<AddClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
