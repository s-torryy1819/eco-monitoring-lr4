package com.example.demo.Services;

import java.util.List;

import com.example.demo.Models.DataModel;

public interface DataLoaderService {

    public List<DataModel> loadAllDataFromCSV();

}