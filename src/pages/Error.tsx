import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Error() {
  return (
    <Container className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" replace={true}>
        Sorry, the page you are looking for doesn't exist or has been moved.
      </Link>
    </Container>
  );
}

export default Error;
