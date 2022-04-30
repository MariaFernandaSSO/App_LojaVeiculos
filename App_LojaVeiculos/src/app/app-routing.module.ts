import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./pages/veiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'detalhes/:indice',
    loadChildren: () => import('./pages/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  { path: 'detalhes',
    loadChildren: ()=> import('./pages/detalhes/detalhes.module').then(m => m.DetalhesPageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./pages/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'cadastro-veiculo',
    loadChildren: () => import('./pages/cadastro-veiculo/cadastro-veiculo.module').then( m => m.CadastroVeiculoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./pages/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./pages/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
