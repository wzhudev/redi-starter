import { connectDependencies } from '@wendellhu/redi/react-bindings'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { PcPlatformService } from './platforms/pc/platform.service'
import { IPlatformService } from './services/platform.service'

const PcApp = connectDependencies(App, [[IPlatformService, { useClass: PcPlatformService, lazy: true }]])

ReactDOM.render(<PcApp />, document.getElementById('app'))
