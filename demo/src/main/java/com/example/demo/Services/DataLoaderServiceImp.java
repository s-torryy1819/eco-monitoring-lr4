package com.example.demo.Services;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import org.springframework.stereotype.Service;

import com.example.demo.Models.DataModel;

@Service
public class DataLoaderServiceImp implements DataLoaderService {

    private static final String PATH_TO_DATA = "./data/LR4.csv";

    @Override
    public List<DataModel> loadAllDataFromCSV() {

        List<DataModel> allData = new ArrayList<>();

        try {

            Scanner myReader = new Scanner(new File(PATH_TO_DATA));

            while (myReader.hasNextLine()) {

                List<String> data = Arrays.asList(myReader.nextLine().split(","));

                Integer indexOfpollution = Integer.valueOf(data.get(0).trim());
                String company = data.get(1).trim();
                String pollutant = data.get(2).trim();
                Double pollutantVolume = Double.valueOf(data.get(3).trim());
                Double atmosphericTax = getTaxAfterNullCheck(data.get(4).trim());
                Double waterTax = getTaxAfterNullCheck(data.get(5).trim());
                Double wasteTax = getTaxAfterNullCheck(data.get(6).trim());
                Double radioactiveTax = getTaxAfterNullCheck(data.get(7).trim());
                Double wholeTax = getTaxAfterNullCheck(data.get(8).trim());

                allData.add(new DataModel(indexOfpollution, company, pollutant, pollutantVolume, atmosphericTax,
                        waterTax, wasteTax, radioactiveTax, wholeTax));
            }

            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
        }

        return allData;
    }

    private Double getTaxAfterNullCheck(String taxValue) {
        if (taxValue.equals("_"))
            return null;
        else
            return Double.valueOf(taxValue);
    }
}
