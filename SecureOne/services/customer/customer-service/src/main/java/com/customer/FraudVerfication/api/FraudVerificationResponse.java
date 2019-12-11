package com.customer.FraudVerfication.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FraudVerificationResponse {
    private String risk_score;
    private IpAddress ip_address;

    public String getRisk_score() {
        return risk_score;
    }

    public void setRisk_score(String risk_score) {
        this.risk_score = risk_score;
    }

    public IpAddress getIp_address() {
        return ip_address;
    }

    public void setIp_address(IpAddress ip_address) {
        this.ip_address = ip_address;
    }
}
