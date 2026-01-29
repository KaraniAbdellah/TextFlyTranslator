package com.example.demo;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

public class Main {
    public static void main(String args[]) {
        Client client = new Client();
        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3-flash-preview",
                        "Translate the text to {language}. If unsure, return 'Translation not available'. Only return translation:\n" +
                                "\"{user_input}\"\n",
                        null);
        System.out.println(response.text());
    }
}
