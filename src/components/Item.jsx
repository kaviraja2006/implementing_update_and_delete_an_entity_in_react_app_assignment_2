const Item = ({ item, onDelete }) => {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        marginBottom: '0.5rem'
      }}>
        <div>
          <h3>{item.name}</h3>
          <p>Status: {item.status}</p>
        </div>
        <button 
          onClick={() => onDelete(item.id)}
          style={{
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default Item;
  