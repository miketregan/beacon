import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    BeaconSharedLibsModule,
    BeaconSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        BeaconSharedLibsModule,
        BeaconSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        BeaconSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BeaconSharedModule {}
