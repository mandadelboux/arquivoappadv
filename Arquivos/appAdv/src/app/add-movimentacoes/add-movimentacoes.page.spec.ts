import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMovimentacoesPage } from './add-movimentacoes.page';

describe('AddMovimentacoesPage', () => {
  let component: AddMovimentacoesPage;
  let fixture: ComponentFixture<AddMovimentacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovimentacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMovimentacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
