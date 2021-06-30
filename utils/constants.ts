export const NAV_HEIGHT = 85
export const primaryColor = '#DEC49D'
export const secondaryColor = '#FAF6F1'
export const breakpoints = {
  xs: 480,
  small: 576,
  medium: 768,
  large: 992,
  tablet: 1100,
  xTablet: 1199,
  xl: 1315,
  xxl: 1600,
  xxxl: 1750,
}
type BreakpointTypes = 'xs' | 'small' | 'medium' | 'large' | 'tablet' | 'xTablet' | 'xl' | 'xxl' | 'xxxl'
export const mq = (size: BreakpointTypes): string => `@media (max-width: ${breakpoints[size]}px)`
