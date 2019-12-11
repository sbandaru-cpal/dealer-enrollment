package com.customer.service;

import com.customer.api.User;
import com.customer.faceApp.client.FaceAppClient;
import com.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private FaceAppClient client;

    public User createUser(User user) {
        saveUser(user);

        return user;
    }

    private void saveUser(User user) {
        customerRepository.insert(user);
    }

    public User getUserById(String userId) {
        List<User> userList = customerRepository.findByUserId(userId);
        if(userList != null){
            return userList.get(0);
        }
        return null;
    }

    public void removeUser(){
        customerRepository.removeAllBy();
    }

    public User getUserByFaceId(String sourceFaceId) {
        List<User> userList = customerRepository.findAllBy();
        boolean flag = false;
        for (User user: userList) {
            String faceId = user.getFaceId();
            flag = client.verifyFaceIds(sourceFaceId, faceId);
            if(flag){
                return user;
            }
        }
        return null;
    }


}
