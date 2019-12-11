package com.customer.faceApp.api;

public class FaceIdVerifyRequest {

    private String faceId1;
    private String faceId2;

    public String getFaceId2() {
        return faceId2;
    }

    public void setFaceId2(String faceId2) {
        this.faceId2 = faceId2;
    }

    public String getFaceId1() {
        return faceId1;
    }

    public void setFaceId1(String faceId1) {
        this.faceId1 = faceId1;
    }
}
