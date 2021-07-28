import { UserInterface } from "../interfaces/user";

export const create = async (
    userBody: UserInterface,
): Promise<UserInterface> => {
    console.log(userBody)
    return userBody

}