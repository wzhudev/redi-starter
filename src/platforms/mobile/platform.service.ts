import { IPlatformService } from 'src/services/platform.service'

export class MobilePlatformService implements IPlatformService {
  getCurrentPlatform(): string {
    return 'mobile device'
  }
}
