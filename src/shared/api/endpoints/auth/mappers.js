import { getDataMapper, mapField } from "../../../lib";

export const mapUserToServer = getDataMapper({
    fio: mapField("fio"),
    email: mapField("email"),
    password: mapField("password"),
    weight: mapField("weight", Number),
    height: mapField("height", Number),
    gender: mapField("gender"),
    department: mapField("department"),
});

export const mapAdminToServer = getDataMapper({
    fio: mapField("fio"),
    email: mapField("email"),
    password: mapField("password"),
});

export const mapFundToServer = getDataMapper({
    fio: mapField("fio"),
    email: mapField("email"),
    password: mapField("password"),
    description: mapField("description"),
});

export const mapDepartmentToServer = getDataMapper({
    fio: mapField("fio"),
    email: mapField("email"),
    password: mapField("password"),
    description: mapField("description"),
});
