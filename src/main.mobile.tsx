import { connectDependencies } from '@wendellhu/redi/react-bindings'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { MobilePlatformService } from './platforms/mobile/platform.service'
import { IPlatformService } from './services/platform.service'

const MobileApp = connectDependencies(App, [[IPlatformService, { useClass: MobilePlatformService }]])

ReactDOM.render(<MobileApp />, document.getElementById('app'))
