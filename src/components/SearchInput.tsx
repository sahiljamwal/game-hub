import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchTerm = useGameQueryStore((s) => s.setSearchTerm);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchTerm(ref.current.value);
          navigate("/");
          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
