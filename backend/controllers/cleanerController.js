const express = require('express');
const cleaner = require('../models/cleaner');

const GetAllCleaners = async (req, res) => {
    try {
        const cleaners = await cleaner.find();
        res.status(200).json(cleaners);
        console.log('Cleaners fetched successfully!');
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const GetSingleCleaner = async (req, res) => {
    const id = req.params.id;
    try {
        const fetchedCleaner = await cleaner.findById(id);
        if (!fetchedCleaner) {
            console.log('Cleaner Not Found');
            return res.status(404).json('Cleaner Not Found');
        }
        res.status(200).json(fetchedCleaner);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const AddCleaner = async (req, res) => {
    try {
        const newCleaner = new cleaner(req.body);
        const savedCleaner = await newCleaner.save();
        console.log('Cleaner Added Successfully!');
        res.status(201).json(savedCleaner);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

const UpdateCleaner = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedCleaner = await cleaner.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCleaner) {
            console.log('Cleaner Not Found!');
            return res.status(404).json('Cleaner Not Found');
        }
        console.log('Cleaner Updated Successfully!');
        res.status(200).json(updatedCleaner);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error!');
    }
};

const DeleteCleaner = async (req, res) => {
    const id = req.params.id;
    try {
        const cleanerToDelete = await cleaner.findByIdAndDelete(id);
        if (!cleanerToDelete) {
            console.log('Cleaner Not Found!');
            return res.status(404).json('Cleaner Not Found');
        }
        console.log('Cleaner Deleted Successfully!');
        res.status(200).json('Cleaner Deleted Successfully!');
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
};

module.exports = {
    GetAllCleaners,
    GetSingleCleaner,
    AddCleaner,
    UpdateCleaner,
    DeleteCleaner
};
