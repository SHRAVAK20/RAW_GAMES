import { Menu, MenuButton, Button, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelect, selectedOrder }: Props) => {
  const SortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentOrderLabel = SortOrder.find(
    (item) => item.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`SortBy: ${currentOrderLabel?.label}`}
      </MenuButton>
      <MenuList>
        {SortOrder.map((order) => (
          <MenuList onClick={() => onSelect(order.value)} key={order.value}>
            {order.label}
          </MenuList>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
