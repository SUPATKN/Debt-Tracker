package com.supatkon.Debt_Tracker_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Integer amountDebt = 0;

    public User(){

    }
    public User(String name){
        this.name = name;
    }



}
