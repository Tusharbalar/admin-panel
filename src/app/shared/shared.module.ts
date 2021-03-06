import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialSharedModule } from './material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AreaComponent,
        CardComponent,
        PieComponent,
        TableComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        HighchartsChartModule,
        MaterialSharedModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AreaComponent,
        CardComponent,
        PieComponent,
        TableComponent
    ]
})
export class SharedModule { }
