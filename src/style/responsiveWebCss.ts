export interface ResponsiveBreakPoint {
    mobile: '320';
    tablet: '720';
    desktop: '1440';
}
export const responsiveBreakPoint = [320, 720, 1440];
export const MQ = responsiveBreakPoint?.map(bp => `@media(min-width:${bp}px)`);