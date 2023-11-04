import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Flex } from "..";
import styles from "./index.module.css";

type SearchType = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function Search({ placeholder, value, setValue }: SearchType) {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={styles.wrapper}>
      <Flex gap="10px">
        <>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => searchHandler(e)}
            className={styles.input}
          />
          <Image src="/assets/search.svg" alt="search" width={20} height={20} />
        </>
      </Flex>
    </div>
  );
}
