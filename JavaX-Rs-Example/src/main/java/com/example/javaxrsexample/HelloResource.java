package com.example.javaxrsexample;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import javax.print.attribute.standard.Media;

@Path("/hello-world")
public class HelloResource {
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON) // this will extract from request
    public User hello(User user) {
        return user;
    }

    @Path("/{name}/{email}")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public User postUser(@PathParam("name") String name, @PathParam("email") String email) {
        return new User(name, email);
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public User postUserWithParm(@QueryParam("name") String name, @QueryParam("email") String email) {
        return new User(name, email);
    }
}

