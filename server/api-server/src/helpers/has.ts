import { WhereParameters } from "../graphql/resolvers";

export const hasAnyFilter = (filters: WhereParameters) => {

    if (filters.appId) {
        return true
    }

    const vals = Object.values(filters) || []

    return vals.some(v => {
        if (Array.isArray(v) && v.length) {
            return true
        } else if (typeof v == 'boolean') {
            return !!v
        }

    })
}