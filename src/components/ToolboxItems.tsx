import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

interface ToolboxItemsProps {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolboxItemsProps) => {
  return (
    <div className={twMerge("overflow-hidden pb-3", className)}>
      <div
        className={twMerge(
          "flex flex-nowrap py-0.5 gap-4 pr-6 min-w-max",
          itemsWrapperClassName
        )}
      >
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="inline-flex items-center gap-3 py-2 px-4 bg-white/5 backdrop-blur-md outline outline-1 outline-white/10 rounded-lg min-w-max"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold text-white text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
