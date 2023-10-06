// TODO: MOVE TO DESIGN SYSTEM APP
import { Text } from "@lebernardo/react";
import classNames from 'classnames';

const styles = {
  container: 'rounded-full w-4 h-4 flex items-center justify-center'
}

type BadgeProps = {
  children: React.ReactNode;
  variant?: string;
  className: string;
};

const variants: app.BadgeVariants = {
  primary: 'bg-base500',
  secondary: 'bg-base700',
  default: 'bg-gray200'
}

const Badge = ({ children, variant, className }: BadgeProps) => {
  const getVariant = () => {
    return variant ? variant : 'default';
  }

  return (
    <div className={classNames(styles.container, {
      [variants[getVariant()]]: !!variant,
      [className]: !!className,
    })}>
      <Text className="text-xs font-bold">{children}</Text>
    </div>
  );
};

export default Badge;
