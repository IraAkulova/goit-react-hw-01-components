import css from './Title.module.css';

export function Title({ title }) {

    return <h2 className={css.title}>{title}</h2>;
};
