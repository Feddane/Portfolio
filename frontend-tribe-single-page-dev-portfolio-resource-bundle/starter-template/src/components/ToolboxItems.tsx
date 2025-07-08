import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
        className={twMerge(
            "overflow-x-auto custom-scrollbar pb-3",
            className
        )}
    >

      <div
        className={twMerge(
          "flex flex-nowrap py-0.5 gap-4 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-3 py-2 px-4 bg-white/5 backdrop-blur-md outline outline-1 outline-white/10 rounded-lg min-w-max"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold text-white text-sm">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
