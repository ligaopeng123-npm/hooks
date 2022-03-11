/* eslint-disable no-restricted-globals */
self.onmessage = (props) => {
    // @ts-ignore
    self.postMessage(`worker: ${props.data}`)
}

export {}
