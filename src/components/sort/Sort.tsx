import React from 'react';
import styles from "../SideBar/SideBar.module.css";
import {Label} from "../label/Label";


import {labelData, sortPopularity, sortYear} from "../../utils/constants/type-sort";


import {SelectForm} from "../selectForm/SelectForm";


function Sort() {
    return (
        <div>
            <form className={styles.Sort}>
                <Label title={labelData.typeSort.sort} htmlFor={labelData.htmlFor}/>
                <SelectForm sortPopularity={sortPopularity}/>
            </form>


            <form className={styles.Sort}>
                <Label title={labelData.typeSort.year} htmlFor={labelData.htmlFor}/>
                <SelectForm sortPopularity={sortYear}/>
            </form>

        </div>
    );
}

export {Sort};
