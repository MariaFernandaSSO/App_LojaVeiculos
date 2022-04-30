import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home'},
    { title: 'Minhas Compras', url: 'compras' },
    { title: 'Minha Conta', url: 'conta' },
    { title: 'Histórico', url: 'historico' }
  ];

  public appPages2 = [
    { title: 'Comprar', url: 'veiculos' },
    { title: 'Vender', url: 'cadastro-veiculo' },
    { title: 'Financiamento', url: '/folder/Trash' }
  ];

  constructor() {}
}
