export interface CheckboxItem {
  id: string;
  label: string | React.ReactNode;
  value?: string | number;
  checked?: boolean;
  rightContent?: React.ReactNode;
}

interface CheckboxGroupProps {
  items: CheckboxItem[];
  selectedIds?: string[];
  onChange?: (id: string, checked: boolean) => void;
  name?: string;
  className?: string;
}

const CheckboxItemComponent = ({
  item,
  name,
  checked,
  onChange,
}: {
  item: CheckboxItem;
  name?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}) => {
  return (
    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mr-2"
      />
      <span className="grow">{item.label}</span>
      {item.rightContent && (
        <span className="font-semi-bold">{item.rightContent}</span>
      )}
    </label>
  );
};

export const CheckboxGroup = ({
  items,
  selectedIds,
  onChange,
  name,
  className = "flex flex-col",
}: CheckboxGroupProps) => {
  return (
    <div className={className}>
      {items.map((item) => {
        const checked = selectedIds
          ? selectedIds.includes(item.id)
          : !!item.checked;
        return (
          <CheckboxItemComponent
            key={item.id}
            item={item}
            name={name}
            checked={checked}
            onChange={(c) => onChange?.(item.id, c)}
          />
        );
      })}
    </div>
  );
};
