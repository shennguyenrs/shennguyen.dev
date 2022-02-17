type Props = {
  condition: boolean;
  children: React.ReactNode;
};

const Include: React.FC<Props> = ({ condition, children }: Props) => {
  if (condition) {
    return <>{children}</>;
  }

  return <></>;
};

export default Include;
