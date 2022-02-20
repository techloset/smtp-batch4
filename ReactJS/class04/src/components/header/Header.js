import {styles} from './HeaderStyle'


export default function Header() {
  return (
    <div style={styles.row}>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid" style={styles.container}>
          <img
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Bootstrap
        </div>
      </nav>
    </div>
  );
}
