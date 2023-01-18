import React, {FC} from 'react';
import styles from './SideBar.module.css';
import Pagination from "./Pagination/Pagination";
import Сheckbox from "../Сheckbox/Сheckbox";
import dataCheckbox from "../../utils/constants/dataCheckbox.json";
import SelectForm from "../SelectForm/SelectForm";
import Label from "../Label/Label";
import SortForm from "../SortForm/SortForm";

interface ISideBar {
    id: number,
    name: string
}

const data: ISideBar[] = dataCheckbox
const labelData = {
    typeSort: {
        sort: "Сортировка по:",
        year: "Год релиза:"
    },
    htmlFor: "sort-film"
}
const SideBar: FC<ISideBar> = () => (
    <div className={styles.ListOfFimls}>
        <p className={styles.Title}>Фильтры:</p>
        <button className={styles.Reset}>Сбросить все фильтры</button>


        <form className={styles.Sort}>
            <Label title={labelData.typeSort.sort} htmlFor={labelData.htmlFor}/>
            <SelectForm/>
        </form>


        <form className={styles.Sort}>
            <Label title={labelData.typeSort.year} htmlFor={labelData.htmlFor}/>
            <SelectForm/>
        </form>


        <fieldset>
            {data.map(({id,name}) => <Сheckbox key={id} name={name}/>)}
        </fieldset>

        <Pagination/>
    </div>
);

export default SideBar;
