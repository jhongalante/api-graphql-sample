import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentResolver {
    @Query(() => String)
    async helloWorld() {
        return 'Hello World!'
    }

    @Mutation(() => Boolean)
    async createAppointment() {
        
        
        
        return true
    }
}