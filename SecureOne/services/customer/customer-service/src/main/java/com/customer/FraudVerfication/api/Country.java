package com.customer.FraudVerfication.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {
    private boolean is_high_risk;

    public boolean isIs_high_risk() {
        return is_high_risk;
    }

    public void setIs_high_risk(boolean is_high_risk) {
        this.is_high_risk = is_high_risk;
    }
}

