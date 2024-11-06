import { useState } from "react";
import { categoriesList } from "../../utils/constants";
import styles from './lists.module.scss';

function Lists() {
  const [categories, setCategories] = useState(categoriesList);
  return (
      <ul>
        {categories.map((item) => (
          <li className={styles.item}>{item}</li>
        ))}
      </ul>
  );
}

export { Lists };
