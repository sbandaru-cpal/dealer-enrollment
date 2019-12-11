package com.customer.FraudVerfication.client;

import com.customer.FraudVerfication.api.FraudVerificationRequest;
import com.customer.FraudVerfication.api.FraudVerificationResponse;
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
public class FraudVerificationClient {
    private RestTemplate restTemplate = new RestTemplate();
    private static final String HOST_NAME = "minfraud.maxmind.com";
    private static final String API_KEY = "Basic MTQ1MTIwOlo1OEoyRHdLQ0RjTUR2VHM=";

    private String baseURL;

    public FraudVerificationClient() {
        this.baseURL = "https://" + HOST_NAME + "/minfraud/v2.0/insights";
        this.restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory(this.baseURL));
    }

    public FraudVerificationResponse verifyFaceIds(FraudVerificationRequest fraudVerificationRequest)  {
        ResponseEntity<FraudVerificationResponse> response = null;
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseURL);
        HttpHeaders httpHeaders  =  new HttpHeaders();
        httpHeaders.set("Authorization",API_KEY);
        httpHeaders.set("Content-Type","application/json");

        HttpEntity<FraudVerificationRequest> request = new HttpEntity<FraudVerificationRequest>(fraudVerificationRequest, httpHeaders);
            response = restTemplate.exchange(builder.toUriString(),
                    HttpMethod.POST, request, new ParameterizedTypeReference<FraudVerificationResponse>() {
                    });

       return response.getBody();
    }
}
