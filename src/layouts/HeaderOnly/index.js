import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';
function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content"></div>
        {children}
      </div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node
};
export default HeaderOnly;
