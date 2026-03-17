import React from 'react'

function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif', color: 'red' }}>
      <h1 style={{ color: 'red' }}>Raycloud AI 工作站测试成功！</h1>
      <p>这是一个从零生成的 Vite + React 项目。</p>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <p>尝试在终端告诉 Claude：<b>"帮我把背景改成淡蓝色，并增加一个计数器按钮"</b></p>
      </div>
      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f5f5f5', borderTop: '2px solid red' }}>
        <p style={{ color: 'red', margin: 0, fontWeight: 'bold' }}>Raycloud 专用</p>
      </footer>
    </div>
  )
}

export default App
