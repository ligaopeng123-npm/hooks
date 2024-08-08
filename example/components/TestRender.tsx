import React from 'react'
import { useState } from 'react'

const TestRender = () => {
    const [count1, setCount1] = useState(1)

    const [count2, setCount2] = useState(100)

    console.log('重新渲染了！') // react17 3次  setCount1 react17合并1次 setTimeout中执行俩次 因此是3次 react 18 2次

    const onOK = () => {
        setCount1((state: number) => state + 1)
        console.log(count1) // 1
        setCount1((state: number) => state + 1) // 3
        console.log(count1) // 1
        setTimeout(() => {
            setCount1(count1 + 1)
            console.log(count1) // 1
            setCount2(count2 + 100)
            console.log(count2) // 100
        }, 1000)
    }

    return (
        <>
            <div onClick={onOK}>按钮</div>
            <p>{ count1 }</p>
            {/*先3 后 2*/}
            <p>{ count2 }</p>
        </>
    )
}

export default TestRender;