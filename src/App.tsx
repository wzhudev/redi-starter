import React from 'react'
import { hot } from 'react-hot-loader'
import { connectDependencies, useDependency } from '@wendellhu/redi/react-bindings'

import { HelloService } from './services/hello.service'

import './App.css'
import { IPlatformService } from './services/platform.service'

function App() {
  const helloService = useDependency(HelloService)
  const platformService = useDependency(IPlatformService)

  return <div>{helloService.sayHello() + ' Now we are running on a ' + platformService.getCurrentPlatform()}</div>
}

const AppContainer = connectDependencies(App, [[HelloService]])

export default hot(module)(() => <AppContainer />)
