import styles from './style.module.css';

interface Props {
  onClick: () => void;
  value: string | null;
}

const Cell: React.FC<Props> = ({ onClick, value }) => (
  <button className={styles.cell} onClick={onClick}>
    {value}
  </button>
);

export default Cell;
