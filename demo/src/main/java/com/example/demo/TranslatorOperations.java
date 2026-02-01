package com.example.demo;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

@Path("/getTranslation")
public class TranslatorOperations {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String getTranslation(PromptRequest req) {
        System.out.println("Hello from Get Translation");
        Client client = new Client();
        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3-flash-preview",
                        req.prompt,
                        null
                );

        return response.text();
    }

    public class PromptRequest {
        public String prompt;
    }
}
