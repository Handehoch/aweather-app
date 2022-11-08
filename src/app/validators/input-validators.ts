import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isNumeric } from '../../utils';

export function validateLat(control: AbstractControl): ValidationErrors | null {
  const numValue = parseFloat(control.value);
  return numValue < -90 || numValue > 90 ? { invalidLat: true } : null;
}

export function validateLong(
  control: AbstractControl
): ValidationErrors | null {
  const numValue = parseFloat(control.value);
  return numValue < -180 || numValue > 180 ? { invalidLon: true } : null;
}

export function numberValidator(
  control: AbstractControl
): ValidationErrors | null {
  return !isNumeric(control.value) ? { stringInput: true } : null;
}
