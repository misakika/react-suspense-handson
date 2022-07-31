import React from "react"


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000)
}

export default AlwaysSuspend