import {
  AbstractControl,
  FormControl,
  Validators
} from '@angular/forms';

export function ValidateDateNumber(control: AbstractControl) {
  try {
    const value = Number(control.value);
    if (value <= 0 || value > 31) {
      return {
        validDateNumber: true
      };
    }
    return null;
  } catch (error) {
    return {
      validDateNumber: true
    };
  }
}

export function ValidateEmail(control: AbstractControl) {
  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEXP.test(control.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

export function ValidateEqual(otherControlName: string) {

  let thisControl: FormControl;
  let otherControl: FormControl;

  return function matchOtherValidate(control: FormControl) {

    if (!control.parent) {
      return null;
    }

    // Initializing the validator.
    if (!thisControl) {
      thisControl = control;
      otherControl = control.parent.get(otherControlName) as FormControl;
      if (!otherControl) {
        throw new Error('ValidateEqual(): other control is not found in parent group');
      }
      otherControl.valueChanges.subscribe(() => {
        thisControl.updateValueAndValidity();
      });
    }

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== thisControl.value) {
      return {
        validateEqual: true
      };
    }

    return null;
  };
}

export function ValidateNumber(control: AbstractControl) {
  const value = control.value;

  if ((parseFloat(value) === Number(value)) && !isNaN(value)) {
    return null;
  } else {
    return {
      validNumber: true
    };
  }
}

export class CustomValidators extends Validators {
  // create a static method for your validation
  static dateNumber(control: AbstractControl) {
    try {
      const value = Number(control.value);
      if (value <= 0 || value > 31) {
        return {
          validDateNumber: true
        };
      }
      return null;
    } catch (error) {
      return {
        validDateNumber: true
      };
    }
  }

  static emailFormat(control: AbstractControl) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  static noWhiteSpace(control: AbstractControl) {
    const value = control.value;

    if (value.indexOf(' ') >= 0) {
      return {
        noWhiteSpace: true
      };
    } else {
      return null;
    }
  }

  static numberFormat(control: AbstractControl) {
    const value = control.value;

    if ((parseFloat(value) === Number(value)) && !isNaN(value)) {
      return null;
    } else {
      return {
        validNumber: true
      };
    }
  }

  static passwordQualified(control: AbstractControl) {
    if (control.value) {
      const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]|.*[!@#\$%\^&\*])(?=.{8,})/;

      return PASSWORD_REGEXP.test(control.value) ? null : {
        passwordQualified: true
      };
    }

    return null;
  }


}
