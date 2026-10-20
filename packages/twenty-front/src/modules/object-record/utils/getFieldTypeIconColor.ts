import { FieldMetadataType } from 'twenty-shared/types';

// Step 9 of each colour scale: soft enough for column headers and field
// labels, and it adapts to dark mode like the rest of the theme
const ICON_COLOR_BY_FIELD_TYPE: Partial<Record<string, string>> = {
  [FieldMetadataType.TEXT]: 'var(--t-color-iris9)',
  [FieldMetadataType.FULL_NAME]: 'var(--t-color-iris9)',
  [FieldMetadataType.RICH_TEXT]: 'var(--t-color-iris9)',
  [FieldMetadataType.ARRAY]: 'var(--t-color-iris9)',

  [FieldMetadataType.LINKS]: 'var(--t-color-sky9)',
  [FieldMetadataType.EMAILS]: 'var(--t-color-sky9)',
  [FieldMetadataType.PHONES]: 'var(--t-color-sky9)',

  [FieldMetadataType.RELATION]: 'var(--t-color-purple9)',
  [FieldMetadataType.MORPH_RELATION]: 'var(--t-color-purple9)',

  [FieldMetadataType.SELECT]: 'var(--t-color-amber9)',
  [FieldMetadataType.MULTI_SELECT]: 'var(--t-color-amber9)',

  [FieldMetadataType.DATE]: 'var(--t-color-orange9)',
  [FieldMetadataType.DATE_TIME]: 'var(--t-color-orange9)',

  [FieldMetadataType.CURRENCY]: 'var(--t-color-green9)',
  [FieldMetadataType.NUMBER]: 'var(--t-color-green9)',
  [FieldMetadataType.NUMERIC]: 'var(--t-color-green9)',
  [FieldMetadataType.RATING]: 'var(--t-color-green9)',

  [FieldMetadataType.ADDRESS]: 'var(--t-color-turquoise9)',

  [FieldMetadataType.BOOLEAN]: 'var(--t-color-cyan9)',
};

// Colours a field's icon by its type (text, contact, relation, ...) so
// columns and field labels are easier to tell apart; system fields stay grey.
// Takes a plain string because both the shared and the generated
// FieldMetadataType enums reach this function
export const getFieldTypeIconColor = (
  fieldType: string | null | undefined,
): string | undefined =>
  fieldType ? ICON_COLOR_BY_FIELD_TYPE[fieldType] : undefined;
