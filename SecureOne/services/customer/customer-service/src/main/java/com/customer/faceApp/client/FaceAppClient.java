package com.customer.faceApp.client;

import com.customer.faceApp.api.FaceIdVerifyRequest;
import com.customer.faceApp.api.FaceIdVerifyResponse;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class FaceAppClient {

    private RestTemplate restTemplate = new RestTemplate();
    private static final String HOST_NAME = "westcentralus.api.cognitive.microsoft.com";
    private static final String API_KEY = "3ce3bbda0de84139bf018eb9a96312d0";

    private String baseURL;

    public FaceAppClient() {
        this.baseURL = "https://" + HOST_NAME + "/face/v1.0/verify";
        this.restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory(this.baseURL));
    }

    public boolean verifyFaceIds(String sourceFaceId, String desiredFaceId)  {
        ResponseEntity<FaceIdVerifyResponse> response = null;
        FaceIdVerifyRequest faceIdVerifyRequest = new FaceIdVerifyRequest();
        faceIdVerifyRequest.setFaceId1(sourceFaceId);
        faceIdVerifyRequest.setFaceId2(desiredFaceId);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseURL);
        HttpHeaders httpHeaders  =  new HttpHeaders();
        httpHeaders.set("Ocp-Apim-Subscription-Key",API_KEY);
        httpHeaders.set("Content-Type","application/json");

        HttpEntity<FaceIdVerifyRequest> request = new HttpEntity<FaceIdVerifyRequest>(faceIdVerifyRequest, httpHeaders);
        try{
            response = restTemplate.exchange(builder.toUriString(),
                    HttpMethod.POST, request, new ParameterizedTypeReference<FaceIdVerifyResponse>() {
                    });
        } catch (Exception e){
            return false;
        }

        if(response.getStatusCodeValue() != 200){
            return false;
        } else {
            return response.getBody().isIdentical();
        }
    }
}
