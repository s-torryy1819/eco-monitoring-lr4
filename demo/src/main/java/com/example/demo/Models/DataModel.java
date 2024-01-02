package com.example.demo.Models;

public class DataModel {
    private Integer indexOfpollution;
    private String company;
    private String pollutant;
    private Double pollutantVolume;
    private Double atmosphericTax;
    private Double waterTax;
    private Double wasteTax;
    private Double radioactiveTax;
    private Double wholeTax;

    public DataModel(Integer indexOfpollution, String company, String pollutant, Double pollutantVolume,
            Double atmosphericTax, Double waterTax, Double wasteTax, Double radioactiveTax, Double wholeTax) {
        this.indexOfpollution = indexOfpollution;
        this.company = company;
        this.pollutant = pollutant;
        this.pollutantVolume = pollutantVolume;
        this.atmosphericTax = atmosphericTax;
        this.waterTax = waterTax;
        this.wasteTax = wasteTax;
        this.radioactiveTax = radioactiveTax;
        this.wholeTax = wholeTax;
    }

    public Integer getIndexOfpollution() {
        return indexOfpollution;
    }

    public void setIndexOfpollution(Integer indexOfpollution) {
        this.indexOfpollution = indexOfpollution;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPollutant() {
        return pollutant;
    }

    public void setPollutant(String pollutant) {
        this.pollutant = pollutant;
    }

    public Double getPollutantVolume() {
        return pollutantVolume;
    }

    public void setPollutantVolume(Double pollutantVolume) {
        this.pollutantVolume = pollutantVolume;
    }

    public Double getAtmosphericTax() {
        return atmosphericTax;
    }

    public void setAtmosphericTax(Double atmosphericTax) {
        this.atmosphericTax = atmosphericTax;
    }

    public Double getWaterTax() {
        return waterTax;
    }

    public void setWaterTax(Double waterTax) {
        this.waterTax = waterTax;
    }

    public Double getWasteTax() {
        return wasteTax;
    }

    public void setWasteTax(Double wasteTax) {
        this.wasteTax = wasteTax;
    }

    public Double getRadioactiveTax() {
        return radioactiveTax;
    }

    public void setRadioactiveTax(Double radioactiveTax) {
        this.radioactiveTax = radioactiveTax;
    }

    public Double getWholeTax() {
        return wholeTax;
    }

    public void setWholeTax(Double wholeTax) {
        this.wholeTax = wholeTax;
    }

}
