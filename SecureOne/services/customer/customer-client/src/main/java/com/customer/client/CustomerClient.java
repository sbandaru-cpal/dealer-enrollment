package com.customer.client;

import com.customer.api.User;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;

public class CustomerClient {

	private RestTemplate restTemplate = new RestTemplate();
	private String baseURL;

	public CustomerClient(final String host, final String port) {
		this.baseURL = "http://" + host + ":" + port+"/";
		this.restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory(this.baseURL));
	}

	public User createUser(User user){
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseURL+"user");
		HttpEntity<User> request = new HttpEntity<User>(user, null);

		ResponseEntity<User> userResponse = restTemplate.exchange(builder.toUriString(),
				HttpMethod.POST, request, new ParameterizedTypeReference<User>() {
				});

		return userResponse.getBody();
	}

	public User getUserByUserId(String userId) {
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseURL+"user/by-userId/")
				.path(userId);
		ResponseEntity<User> userResponse = restTemplate.exchange(builder.toUriString(),
				HttpMethod.GET, null , new ParameterizedTypeReference<User>() {
				});

		return userResponse.getBody();
	}

	public User getUserByFaceId(String faceId) {
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseURL+"user/by-faceId/")
					.path(faceId);

		ResponseEntity<User> userResponse = restTemplate.exchange(builder.toUriString(),
				HttpMethod.GET, null , new ParameterizedTypeReference<User>() {
				});

		return userResponse.getBody();
	}


}
