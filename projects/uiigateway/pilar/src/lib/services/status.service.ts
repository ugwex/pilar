import { Injectable } from '@angular/core';
import { PROGRES_STATUS } from '../pilar.constant';

@Injectable()
export class StatusService {

    public addEditMode: boolean;
    public keyinVerifyMode:  boolean;

    constructor() { }

    /*
     *  Function untuk mengecek apakah status nya 'terevisi'
     *  Params : status
     *  Result : boolean
     */
    revised(status): boolean {
        if (PROGRES_STATUS.REVISED === status) {
            return true;
        }
        return false;
    }

    /*
     *  Function untuk mengecek apakah status nya 'terverifikasi'
     *  Params : status
     *  Result : boolean
     */
    verified(status): boolean {
        if (PROGRES_STATUS.VERIFIED === status) {
            return true;
        }
        return false;
    }

    /*
     *  Function untuk mengecek apakah status nya 'tervalidasi'
     *  Params : status
     *  Result : boolean
     */
    validated(status): boolean {
        if (PROGRES_STATUS.VALIDATED === status) {
            return true;
        }
        return false;
    }

    /*
     *  Function untuk mengecek apakah status nya 'tercetak'
     *  Params : status
     *  Result : boolean
     */
    printed(status): boolean {
        if (PROGRES_STATUS.PRINTED === status) {
            return true;
        }
        return false;
    }
}
