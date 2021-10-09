import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregaComponent } from './lista-entrega.component';

describe('ListaEntregaComponent', () => {
  let component: ListaEntregaComponent;
  let fixture: ComponentFixture<ListaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
