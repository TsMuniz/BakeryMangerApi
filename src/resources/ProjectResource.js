import Adminjs from "adminjs";
import Project from "../database/models/project";


const projectResources = {
    resource: Project,
    options: {
        parent:{
            icon: "Roadmap"
        },
        properties: {
            id: {
                position: 1
            },
            name: {
                position: 2,
                isRequired: true
            },
            descripition: {
                position: 3,
                type: "textarea"
            },
            status: {
                position: 5,
                isRequired: true,
                availableValues: [
                    {value: "active", label: "Ativo"},
                    {value: "archived", label: "Arquivado"},
                ]
            },
            userId: {
                position: 4
            },
            user_id: {
                isVisible: false
            },
            createdAt: {
                position: 6,
                isVisible: {list: true, filter: true, show: true, edit: false}
            },
            updatedAt: {
                position: 7,
                isVisible: {list: true, filter: true, show: true, edit: false}
            },
        }
    }
}

export default projectResources