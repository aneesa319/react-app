import React from 'react'

export default function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    }}>
      <header style={{ 
        backgroundColor: '#282c34', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h1>🚀 Hello React App!</h1>
        <p>Welcome to my CI/CD Pipeline Demo</p>
      </header>

      <main>
        <section style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>✨ Features</h2>
          <ul>
            <li>⚡ Auto-deploy on every push</li>
            <li>🐳 Docker containerized</li>
            <li>🔧 Jenkins CI/CD pipeline</li>
            <li>☁️ AWS EC2 hosting</li>
          </ul>
        </section>

        <section style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>📊 Pipeline Stages</h2>
          <ol>
            <li>Clean Workspace</li>
            <li>Clone Repository</li>
            <li>Build Docker Image</li>
            <li>Run Docker Container</li>
          </ol>
        </section>

        <section style={{ 
          backgroundColor: '#e8f5e9', 
          padding: '20px', 
          borderRadius: '8px',
          border: '2px solid #4caf50',
          textAlign: 'center'
        }}>
          <h3>🎉 Deployment Successful!</h3>
          <p>This page was automatically deployed by Jenkins</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Last updated: {new Date().toLocaleString()}
          </p>
        </section>
      </main>

      <footer style={{ 
        marginTop: '30px', 
        textAlign: 'center', 
        color: '#666',
        fontSize: '14px'
      }}>
        <p>© 2026 React CI/CD Demo | Powered by Jenkins + Docker + AWS</p>
      </footer>
    </div>
  )
}
