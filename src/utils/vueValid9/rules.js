import { i18n } from '../../boot/i18n';
import * as _v from './validations';

export const xItemsOrMore = (x, val) => _v.xItemsOrMore(x, val) || i18n.t('arrayLength0');
