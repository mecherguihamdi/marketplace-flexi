import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from './pages/card/card.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {DetailComponent} from './pages/product-detail/detail.component';
import {CartComponent} from './pages/cart/cart.component';
import {AuthGuard} from "./_guards/auth.guard";
import {OrderComponent} from "./pages/order/order.component";
import {OrderDetailComponent} from "./pages/order-detail/order-detail.component";
import {ProductListComponent} from "./pages/product-list/product.list.component";
import {UserDetailComponent} from "./pages/user-edit/user-detail.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";
import {Role} from "./enum/Role";
import { CommercantsComponent } from './pages/commercants/commercants.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WelyneComponent } from './pages/welyne/welyne.component';
import { ProposComponent } from './pages/propos/propos.component';
import { StatiqtiquesComponent } from './pages/statiqtiques/statiqtiques.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';


const routes: Routes = [
    {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
    {path: 'produit/:id', component: DetailComponent},
    {path: 'categorie/:id', component: CardComponent},
    {path: 'produits', component: CardComponent},
    {path: 'categorie', component: CardComponent},
    {path: 'connecter', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'inscription', component: SignupComponent},
    {path: 'panier', component: CartComponent},
    {path: 'acceuil', component: HomeComponent},
    {path: 'commercants', component: CommercantsComponent},
    {path: 'abonnements', component: PricingComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'propos' , component: ProposComponent},
    {path: 'blog' , component:BlogComponent},
    {path: 'faq' , component: FaqComponent},
    {path: 'welyne' , component:WelyneComponent},
    {path: 'success', component: SignupComponent},
    {path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard]},
    {path: 'commandes', component: OrderComponent, canActivate: [AuthGuard]},
    {path: 'statistiques', component: StatiqtiquesComponent},
    {path: 'ventes', redirectTo: 'ventes/produits', pathMatch: 'full'},
    {
        path: 'ventes/produits',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    {
        path: 'profile',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'ventes/produits/:id/modifier',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    {
        path: 'ventes/produits/ajouter',
        component: ProductAddComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
