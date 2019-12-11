package com.customer.service;

import com.customer.api.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CustomerServiceTest {

    private User user;

    @Autowired
    private CustomerService subject;

    @Before
    public void setUp(){
        user = createUser();
    }

    @Test
    public void createUser_returnsUserDetails() {
        User actual = subject.createUser(user);
        assertThat(actual.getFirstName(), is("Chandraa"));
        assertThat(actual.getLastName(), is("Reddyy"));
        assertThat(actual.getFaceId(), is("faceId1"));
        assertThat(actual.getUserId(), is("user123"));
        assertThat(actual.getPassword(), is("chandu1"));
    }
    private User createUser() {
        User user = new User();
        user.setUserId("user123");
        user.setPassword("chandu1");
        user.setFaceId("faceId1");
        user.setFirstName("Chandraa");
        user.setLastName("Reddyy");
        return user;
    }

    @Test
    public void getUserById() {
        subject.createUser(createUser());
        User actual = subject.getUserById("user123");
        assertThat(actual.getFirstName(), is("Chandraa"));
        assertThat(actual.getLastName(), is("Reddyy"));
        assertThat(actual.getFaceId(), is("faceId1"));
        assertThat(actual.getUserId(), is("user123"));
        assertThat(actual.getPassword(), is("chandu1"));
    }

    /*@Test
    public void remove(){
        subject.removeUser();
    }*/

}
