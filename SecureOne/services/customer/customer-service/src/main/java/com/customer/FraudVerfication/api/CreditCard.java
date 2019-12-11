package com.customer.FraudVerfication.api;

public class CreditCard {
    private String issuer_id_number;
    private String last_4_digits;
    private String token;
    private String bank_name;
    private String bank_phone_country_code;
    private String cvv_result = "N";
    private String avs_result = "Y";

    public String getIssuer_id_number() {
        return issuer_id_number;
    }

    public void setIssuer_id_number(String issuer_id_number) {
        this.issuer_id_number = issuer_id_number;
    }

    public String getLast_4_digits() {
        return last_4_digits;
    }

    public void setLast_4_digits(String last_4_digits) {
        this.last_4_digits = last_4_digits;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }

    public String getBank_phone_country_code() {
        return bank_phone_country_code;
    }

    public void setBank_phone_country_code(String bank_phone_country_code) {
        this.bank_phone_country_code = bank_phone_country_code;
    }

    public String getCvv_result() {
        return cvv_result;
    }

    public void setCvv_result(String cvv_result) {
        this.cvv_result = cvv_result;
    }

    public String getAvs_result() {
        return avs_result;
    }

    public void setAvs_result(String avs_result) {
        this.avs_result = avs_result;
    }
}
