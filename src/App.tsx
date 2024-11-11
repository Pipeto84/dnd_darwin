import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Harvesting Process</h2>
        <p className={styles.infoTitle}>En este formulario usted debe configurar los requerimientos básicos por el FDA para ser declarados por producto.</p>
      </header>
    </div>
  );
}

export default App;
