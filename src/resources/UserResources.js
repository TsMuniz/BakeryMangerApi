import Adminjs from "adminjs";

import User from "../database/models/User";


const userResources = {
    resource: User,
    options: {
        parent: {
            icon: "User"
        },
        properties: {
            id: {
                isVisible: false
            },
            name: {
                position: 2,
                isRequired: true
            },
            email: {
                position: 3,
                isRequired: true
            },
            role: {
                position: 4,
                isRequired: true,
                availableValues: [
                    {value: "admin", label: "Administrador"},
                    {value: "manager", label: "Gerente"},
                    {value: "developer", label: "Desenvolvedor"}
                ]
            },
            status: {
                position: 5,
                isRequired: true,
                availableValues: [
                    {value: "active", label: "Ativo"},
                    {value: "archived", label: "Arquivado"},
                ]
            },
            createdAt: {
                position: 6,
                isVisible: {list: true, filter: true, show: true, edit: false}
            },
            updatedAt: {
                position: 7,
                isVisible: {list: true, filter: true, show: true, edit: false}
            },
            password: {
                isVisible: false
            },
            password_hash: {
                isVisible: false
            }
        }
    }
}

export default userResources