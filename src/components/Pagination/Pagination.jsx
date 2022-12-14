import PropTypes from 'prop-types';
import { Nav, Button } from './Pagination.styled';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

// https://codesandbox.io/s/react-pagination-qqrdf?from-embed=&file=/src/Posts.jsx
