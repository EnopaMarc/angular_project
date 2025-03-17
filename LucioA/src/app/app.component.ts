import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesComponent } from './components/features/features.component';
import {CustomersComponent} from './components/customers/customers.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FeaturesComponent,CustomersComponent,NewsletterComponent,PricingComponent,TeamComponent,TestimonialsComponent,StatisticsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LucioA';
}
