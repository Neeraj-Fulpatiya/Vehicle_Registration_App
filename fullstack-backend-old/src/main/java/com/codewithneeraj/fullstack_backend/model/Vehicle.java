//package com.codewithneeraj.fullstack_backend.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
//
//@Entity
//public class Vehicle {
//    @Id
//    @GeneratedValue
//    private Long id;
//    private String registrationNumber;
//    private String brand;
//    private String model;
//    private int year;
//    private String ownerName;
//
//    @ManyToOne
//    private User user;
//
//    // Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getRegistrationNumber() {
//        return registrationNumber;
//    }
//
//    public void setRegistrationNumber(String registrationNumber) {
//        this.registrationNumber = registrationNumber;
//    }
//
//    public String getBrand() {
//        return brand;
//    }
//
//    public void setBrand(String brand) {
//        this.brand = brand;
//    }
//
//    public String getModel() {
//        return model;
//    }
//
//    public void setModel(String model) {
//        this.model = model;
//    }
//
//    public int getYear() {
//        return year;
//    }
//
//    public void setYear(int year) {
//        this.year = year;
//    }
//
//    public String getOwnerName() {
//        return ownerName;
//    }
//
//    public void setOwnerName(String ownerName) {
//        this.ownerName = ownerName;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//}


package com.codewithneeraj.fullstack_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String model;
    private String registrationNumber;
    private String type; // Add this field

//    *********
@ManyToOne
@JoinColumn(name = "user_id")
@JsonBackReference
private User user;

    //    *******
    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
