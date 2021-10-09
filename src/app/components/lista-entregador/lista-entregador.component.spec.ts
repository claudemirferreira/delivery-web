import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregadorComponent } from './lista-entregador.component';

describe('ListaEntregadorComponent', () => {
  let component: ListaEntregadorComponent;
  let fixture: ComponentFixture<ListaEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntregadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
