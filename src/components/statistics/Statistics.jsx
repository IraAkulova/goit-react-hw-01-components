import PropTypes from 'prop-types';
import { Title } from 'components/statistics/title/Title';
import data from 'data.json';
import { StatsList } from 'components/statistics/statsList/StatsList';
import css from './Statistics.module.css';

export function Statistics({title, stats}) {
  return (
    <section className={css.statistics}>
      <Title title="Upload stats" />
      <StatsList stats={data} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
