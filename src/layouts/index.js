import styles from './index.css';

function BasicLayout(props) {
  if(props.location.pathname ==='/'){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Hello React!</h1>
        { props.children }
      </div>
    );
  }else{
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to {props.location.pathname.split('/')}!</h1>
        { props.children }
      </div>
    );
  }

}

export default BasicLayout;
