package com.customer.repository;

import com.customer.api.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CustomerRepository extends MongoRepository<User, String> {

    public List<User> findByUserId(String userId);
    public List<User> findAllBy();
    public void removeAllBy();

}