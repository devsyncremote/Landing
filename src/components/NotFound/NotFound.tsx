import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center ${styles.notFound}`} style={{ height: '100vh'}}>
      <h1 className="mb-3">404 Not Found</h1>
      <p className="mb-3">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;