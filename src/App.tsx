import React, { useState } from 'react'

function App() {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif', color: 'blue' }}>
      <h1 style={{ color: 'blue' }}>Raycloud AI 工作站测试成功！</h1>
      <p>这是一个从零生成的 Vite + React 项目。</p>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <p>尝试在终端告诉 Claude：<b>"帮我把背景改成淡蓝色，并增加一个计数器按钮"</b></p>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <input 
          type="date" 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', border: '1px solid blue', borderRadius: '4px' }}
        />
        <button 
          onClick={() => alert(`选择的日期：${selectedDate}`)}
          style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          确认日期
        </button>
      </div>
      
      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f5f5f5', borderTop: '2px solid blue' }}>
        <p style={{ color: 'blue', margin: 0, fontWeight: 'bold' }}>Raycloud 专用</p>
      </footer>
    </div>
  )
}

export default App
