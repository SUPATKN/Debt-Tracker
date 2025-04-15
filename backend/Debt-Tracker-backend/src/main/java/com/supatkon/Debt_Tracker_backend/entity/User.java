package com.supatkon.Debt_Tracker_backend.entity;

import jakarta.persistence.*;


@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Integer totalDebt = 0;

    public User(){

    }
    public User(String name){
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getTotalDebt() {
        return totalDebt;
    }

    public void setTotalDebt(Integer totalDebt) {
        this.totalDebt = totalDebt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
