import './App.css'
import AlwaysSuspend from './AlwaysSuspend'
import { Suspense } from 'react'

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>レンダリング待ち</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  )
}

export default App
