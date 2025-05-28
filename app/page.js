export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        BleedTime
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: '#DC143C'
      }}>
        Your meetings are bleeding money
      </p>
      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        background: '#DC143C',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Coming Soon
      </button>
    </div>
  )
}