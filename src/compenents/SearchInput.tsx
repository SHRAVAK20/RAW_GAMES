import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import styles from "./Nav.module.scss";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      className={styles.searchBarContainer}
      onSubmit={(event) => {
        event.preventDefault();
        setSearchText(ref?.current?.value || "");
        navigate("/");
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
