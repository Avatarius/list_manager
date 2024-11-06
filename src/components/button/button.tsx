import styles from './button.module.scss';

interface IButtonProps {
  text: string;
}

function Button(props: IButtonProps) {
  const { text } = props;
  return <button className={styles.container}>{text}</button>;
}

export { Button };
