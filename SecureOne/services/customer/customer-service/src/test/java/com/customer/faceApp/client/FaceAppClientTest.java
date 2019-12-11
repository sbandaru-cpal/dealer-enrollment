package com.customer.faceApp.client;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class FaceAppClientTest {

    @Autowired
    private FaceAppClient faceAppClient;

    @Test
    public void verifyFaceIds_matching() {
        Boolean isMatch = faceAppClient.verifyFaceIds("4fc19d0a-0b81-4585-85f8-a8b8b083ecdc","c42d0849-7d36-434e-ab5b-ad8046569129");
        assertThat(isMatch, is(true));
    }

    @Test
    public void verifyFaceIds_NotMatching() {
        Boolean isMatch = faceAppClient.verifyFaceIds("4fc19d0a-0b81-4585-85f8-a8b8b083ecdc","c42d0849-7d36-434e-ab5b-ad8046569130");
        assertThat(isMatch, is(false));
    }
}