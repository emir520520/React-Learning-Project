function App() {
    const type='number';
    const min=5;

    return (
        <input type={type} min={min} style={{border: '2px solid green', color: 'red'}}/>
    );
}

export default App;