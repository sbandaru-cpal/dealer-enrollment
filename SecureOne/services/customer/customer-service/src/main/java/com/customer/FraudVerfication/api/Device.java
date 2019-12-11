package com.customer.FraudVerfication.api;

public class Device {
    private String ip_address;
    private String user_agent;
    private String accept_language;
    private String session_age;
    private String session_id;


    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getUser_agent() {
        return user_agent;
    }

    public void setUser_agent(String user_agent) {
        this.user_agent = user_agent;
    }

    public String getAccept_language() {
        return accept_language;
    }

    public void setAccept_language(String accept_language) {
        this.accept_language = accept_language;
    }

    public String getSession_age() {
        return session_age;
    }

    public void setSession_age(String session_age) {
        this.session_age = session_age;
    }

    public String getSession_id() {
        return session_id;
    }

    public void setSession_id(String session_id) {
        this.session_id = session_id;
    }

}
