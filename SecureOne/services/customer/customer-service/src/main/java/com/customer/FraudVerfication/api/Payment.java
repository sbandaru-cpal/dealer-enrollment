package com.customer.FraudVerfication.api;

public class Payment {
    private String processor;
    private boolean was_authorized;
    private String decline_code;

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public boolean isWas_authorized() {
        return was_authorized;
    }

    public void setWas_authorized(boolean was_authorized) {
        this.was_authorized = was_authorized;
    }

    public String getDecline_code() {
        return decline_code;
    }

    public void setDecline_code(String decline_code) {
        this.decline_code = decline_code;
    }


}
