package com.customer.FraudVerfication.api;

public class Account {
    private String user_id;
    private String username_md5;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUsername_md5() {
        return username_md5;
    }

    public void setUsername_md5(String username_md5) {
        this.username_md5 = username_md5;
    }
}
