/**
 * Configuration des styles de liste pour les projets
 * 
 * Styles disponibles :
 * - checkmark : Liste avec des icônes de validation SVG (✓)
 * - dotted : Liste avec des points (•) - Style par défaut
 * - decimal : Liste numérotée (1., 2., 3., etc.)
 * - none : Liste sans puce ni numérotation
 */

export type ListStyle = 'checkmark' | 'dotted' | 'decimal' | 'none';

export const LIST_STYLES: Record<ListStyle, {
  icon?: string;
  className: string;
  listStyleType?: string;
  useSvgIcon?: boolean;
}> = {
  checkmark: {
    className: 'flex items-start',
    listStyleType: 'none',
    useSvgIcon: true
  },
  dotted: {
    icon: '•',
    className: 'flex items-start',
    listStyleType: 'none'
  },
  decimal: {
    className: 'flex items-start',
    listStyleType: 'decimal'
  },
  none: {
    className: 'flex items-start',
    listStyleType: 'none'
  }
};

export const DEFAULT_LIST_STYLE: ListStyle = 'dotted';
