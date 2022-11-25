import { User, UserRole } from "@app/models/user.model";

export const Users: User[] = [
    {
        id : "1",
        name: "John Doe",
        username: "johndoe",
        password: "john123",
        role: UserRole.Admin
    },
    {
        id : "2",
        name: "Juan Dela Cruz",
        username: "juandelacruz",
        password: "juan123",
        role: UserRole.Default
    }
]