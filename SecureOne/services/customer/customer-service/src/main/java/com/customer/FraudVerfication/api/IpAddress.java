package com.customer.FraudVerfication.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class IpAddress {
    private String risk;
    private Country country;
}
