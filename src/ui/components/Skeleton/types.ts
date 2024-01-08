import { ComponentProps } from 'react';


export interface SkeletonProps extends Omit<ComponentProps<'div'>, 'children'> {
  variant?: 'circular' | 'rectangular' | 'rounded'
  animate?: 'pulse' | 'wave' | false
  height?: number | string
  width?: number | string
}
