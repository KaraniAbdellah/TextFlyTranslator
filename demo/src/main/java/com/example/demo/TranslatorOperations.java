package com.example.demo;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

@Path("/getTranslation")
public class TranslatorOperations {
    // REST endpoint
    @GET
    @Produces("text/plain")
    public String getTranslation() {
        String apiKey = System.getenv("GOOGLE_API_KEY");
        System.out.println(apiKey);
        Client client = new Client();
        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3-flash-preview",
                        "Translate this <Hello World> to this langauge <Arabic>",
                        null);
        System.out.println(response.text());
        return response.text();
    }
}

// NOTE: each time you must open wildFly server --> /bin/standlone.sh --> and before i need to setUp api key
// export GOOGLE_API_KEY=API_KEY
// /home/abdellah/wildfly-39.0.0.Beta1/bin/standalone.sh


