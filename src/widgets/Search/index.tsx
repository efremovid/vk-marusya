import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import { Button } from "../../shared/ui/Button";
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <form className={styles.container}>
      <BaseInput placeholder="Введите запрос" />
      <Button theme="primary">поиск</Button>
    </form>
  );
};

export default Search;
