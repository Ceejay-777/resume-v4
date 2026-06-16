import { Icon } from "iconsax-reactjs";

const SkillIcon = ({
  tech,
  i,
}: {
  tech: { icon: Icon; label: string };
  i: number;
}) => {
  return (
    <div
      key={`dup-${i}`}
      className="flex items-center gap-3 text-2xl font-semibold text-muted-foreground/80 hover:text-foreground transition-colors"
    >
      <tech.icon className="h-8 w-8" />
      <span>{tech.label}</span>
    </div>
  );
};

export default SkillIcon;
