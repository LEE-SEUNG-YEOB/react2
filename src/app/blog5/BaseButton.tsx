import styles from './base-button.module.css';

type BaseButtonProps = {
  className?: string;
};

export function BaseButton({ className }: BaseButtonProps) {
  return (
    <button className={`${styles.primary} ${className ?? ''}`}>
    </button>
  );
}
