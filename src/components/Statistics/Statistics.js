import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  let color;
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.stat__list}>
        {stats.map(
          ({ id, label, percentage }) => (
            (color = 'rgb(' + r() + ',' + r() + ',' + r() + ')'),
            (
              <li
                className={styles.item}
                style={{ backgroundColor: color }}
                key={id}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
              </li>
            )
          ),
        )}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function r() {
  return Math.floor(Math.random() * 255);
}

export default Statistics;
