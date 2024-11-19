import { IUser } from "../_interfaces/user/user.interface";
import { IFilterOption } from "../_interfaces/filter-options-interface";
import { isWithinInterval } from "date-fns";


const filterUserList = (filterOptions: IFilterOption, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUserListByName(filterOptions.name, usersList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

const filterUserListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) return usersList;

    const filteredList = usersList.filter(user => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) return usersList;

    const filteredList = usersList.filter(user => user.ativo === status);

    return filteredList;
}

const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATE_NOT_SELECTED) return usersList;

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
    });

    const filteredList = usersList.filter(checkDateInterval);

    return filteredList;
}

export { filterUserList };