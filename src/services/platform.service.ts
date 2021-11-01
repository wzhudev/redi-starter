import { createIdentifier } from '@wendellhu/redi'

export interface IPlatformService {
  getCurrentPlatform(): string
}

export const IPlatformService = createIdentifier<IPlatformService>('IPlatformService')
