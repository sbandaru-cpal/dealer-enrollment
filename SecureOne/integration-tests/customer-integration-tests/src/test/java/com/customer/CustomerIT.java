package com.customer;

import com.customer.api.User;
import com.customer.client.CustomerClient;
import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.junit.MatcherAssert.assertThat;

public class CustomerIT {

	private CustomerClient customerClient = new CustomerClient("localhost", "8080");
	private User user;
	
	@Before
	public void setup(){

	}

	private User buildUserRequest(String userId, String faceId) {
		User user = new User();
		user.setUserId(userId);
		user.setPassword("december");
		user.setFaceId(faceId);
		user.setFirstName("firstName");
		user.setLastName("lastName");
		return user;
	}



	@Test
	public void getUser_withUserId() {
		customerClient.createUser(buildUserRequest("creddy123", "4fc19d0a-0b81-4585-85f8-a8b8b083ecdc"));
		User user = customerClient.getUserByUserId("creddy123");
		assertThat(user.getUserId(), is("creddy123"));
		assertThat(user.getFirstName(), is("firstName"));
		assertThat(user.getFaceId(), is("4fc19d0a-0b81-4585-85f8-a8b8b083ecdc"));
	}

	@Test
	public void getUser_withFaceId() {
		User user = customerClient.getUserByFaceId("c42d0849-7d36-434e-ab5b-ad8046569129");
		assertThat(user.getUserId(), is("creddy123"));
		assertThat(user.getFirstName(), is("firstName"));
	}

}
