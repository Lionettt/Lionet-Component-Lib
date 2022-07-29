import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 lionet 组件库</h1>
        <p>lionet 模仿 antd 组件库开发形式</p>
        <h3>安装试试</h3>
        <code>
          npm install lionet --save
        </code>
      </>
    )
  }, { info : { disable: true }})