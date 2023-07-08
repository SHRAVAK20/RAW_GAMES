import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import styles from "./Nav.module.scss";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchText: (searchText: string) => void;
}

const SearchInput = ({ onSearchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.searchBarContainer}
      onSubmit={(event) => {
        event.preventDefault();
        onSearchText(ref?.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Here...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
