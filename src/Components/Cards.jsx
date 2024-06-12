import PropTypes from 'prop-types';
import styles from './cards.module.css';

export default function Cards ({ title, content }) {
  return (
    <div className={styles.cardHbilits}>
      <h3>{title}</h3>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};
